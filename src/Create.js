import React, { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import './Create.css'

function Create() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const configuration = new Configuration({
    organization: "org-bENn3KVLDh8R0i2yw6rrjT77",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const preText = process.env.REACT_APP_RARAITY_PRETEXT;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await openai.image.create({
        prompt: prompt,
        n: 1,
        size: "256x256"
      });
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error(error);
    }
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
        {imageUrl && <img src={imageUrl} alt="Generated Image" />}
      </div>
    </div>
  );
}

export default Create;