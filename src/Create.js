import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './Create.css';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

function Create() {
  const [prompt, setPrompt] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');

  const handleButtonClick = (category, option) => {
    setPrompt((prevPrompt) => ({
      ...prevPrompt,
      [category]: {
        ...prevPrompt[category],
        [option]: !prevPrompt[category]?.[option] && true,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputString = Object.entries(prompt)
      .flatMap(([category, options]) => {
        const selectedOptions = Object.entries(options)
          .filter(([_, value]) => value)
          .map(([option]) => `${category}: ${option}`);
        return selectedOptions;
      })
      .join('\n');
    if (inputString.trim() === '') {
      // prompt string is empty or only contains whitespace characters
      return;
    }
    setInput(inputString);
    await generateImage(inputString);
  };

  const generateImage = async (prompt) => {
    setIsLoading(true);
    try {
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: '256x256',
      });
      setImageUrl(response.data.data[0].url);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className='create'>
      <div className='create__container'>
        <h2><span>Choose Your Details:</span></h2>
        <form onSubmit={handleSubmit}>
          <br/>
          <div className="create__button-container">
            <div className='create__button-section'>
              <h3>Style</h3>
              <button className={`create__button ${prompt['Style']?.['Abstract'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Style', 'Abstract')}>Abstract</button>
              <button className={`create__button ${prompt['Style']?.['Photorealism'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Style', 'Photorealism')}>Photorealism</button>
              <button className={`create__button ${prompt['Style']?.['Whimsical'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Style', 'Whimsical')}>Whimsical</button>
              <button className={`create__button ${prompt['Style']?.['Surrealism'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Style', 'Surrealism')}>Surrealism</button>
              <button className={`create__button ${prompt['Style']?.['Baroque'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Style', 'Baroque')}>Baroque</button>
              <button className={`create__button ${prompt['Style']?.['Cubism'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Style', 'Cubism')}>Cubism</button>
            </div>
            <div className='create__button-section'>
              <h3>Medium</h3>
              <button className={`create__button ${prompt['Medium']?.['Oil Painting'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Medium', 'Oil Painting')}>Oil Painting</button>
              <button className={`create__button ${prompt['Medium']?.['Watercolor'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Medium', 'Watercolor')}>Watercolor</button>
              <button className={`create__button ${prompt['Medium']?.['Sculpturesque'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Medium', 'Sculpturesque')}>Sculpturesque</button>
            </div>
            <div className='create__button-section'>
              <h3>Subject Matter</h3>
              <button className={`create__button ${prompt['Subject Matter']?.['Landscape'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Subject Matter', 'Landscape')}>Landscape</button>
              <button className={`create__button ${prompt['Subject Matter']?.['Portrait'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Subject Matter', 'Portrait')}>Portrait</button>
              <button className={`create__button ${prompt['Subject Matter']?.['Still Life'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Subject Matter', 'Still Life')}>Still Life</button>
            </div>
            <div className='create__button-section'>
              <h3>Period</h3>
              <button className={`create__button ${prompt['Period']?.['Contemporary'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Period', 'Contemporary')}>Contemporary</button>
              <button className={`create__button ${prompt['Period']?.['Impressionism'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Period', 'Impressionism')}>Impressionism</button>
              <button className={`create__button ${prompt['Period']?.['Pop Art'] && 'create__button--active'}`} type="button" onClick={() => handleButtonClick('Period', 'Pop Art')}>Pop Art</button>
            </div>
          </div>
          {/* <label>
            <input className="create__input" placeholder="Anything Else To Include?" type="text" value={input} onChange={e => setInput(e.target.value)} />
          </label>
          <br/> */}
          <button className="create__button" type="submit">Generate Art</button>
        </form>
        {isLoading && <div>Loading...</div>}
        {imageUrl && !isLoading && <img src={imageUrl} alt="Generated Image" className='create__image'/>}
      </div>
    </div>
  );
}

export default Create;
