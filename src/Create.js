import React, { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import './Create.css';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

function Create() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async (prompt) => {
    setIsLoading(true);
    try {
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256"
      });
      setImageUrl(response.data.data[0].url);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await generateImage(prompt);
  }

  return (
    <div className='create'>
      <div className='create__container'>
        <h2><span>Prompt:</span></h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input className="create__input" placeholder="Create a sunset oceanscape for my living room..." type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
          </label>
          <br/>
          <button className="create__button" type="submit">Generate Art</button>
        </form>
        {isLoading && <div>Loading...</div>}
        {imageUrl && !isLoading && <img src={imageUrl} alt="Generated Image" className='create__image'/>}
      </div>
    </div>
  );
}

export default Create;
