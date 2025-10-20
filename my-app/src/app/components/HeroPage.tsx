'use client'
import { Hero, PHRASES } from '../Hero'
import HeroItem from './HeroItem'
import { useState } from 'react';
import HeroCarousel from './HeroCarousel';

import { CheckBox } from './CheckBox';




const HeroPage = (heroes: Hero[]) => {


  const [rawStyle, setRawStyle] = useState<boolean>(false)
  const [personalize, setPersonalize] = useState<boolean>(false)
  const [quality, setQuality] = useState<boolean>(true)
  const [heroId, setHeroId] = useState<number>(0)


  const handleRawStateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRawStyle(e.target.checked);
  };
  const handlePersonalizeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPersonalize(e.target.checked);
  };
  const handleQualityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuality(e.target.checked);
  };
  const handleHeroChange = (id: number): void => {
    setHeroId(id);
  };


  const compilePrompt = (copyToClipBoard = true): string => {
    let prompt = `
      Photorealistic  fullbody image of ${heroes[heroId].name}. 
      This ${heroes[heroId].attribute} ${heroes[heroId].slogan}. 
      ${heroes[heroId].abstract} 
      ${heroes[heroId].description} 
      ${(copyToClipBoard && rawStyle) ? PHRASES.STYLE_RAW : ''}
      ${(copyToClipBoard && personalize) ? PHRASES.PERSONALIZE : ''}
      ${(copyToClipBoard && quality) ? PHRASES.QUALITY : ''}
    `

    // copy prompt to clipboard only needed and in client mode
    if (copyToClipBoard && typeof document !== 'undefined' && document.hasFocus()) {
      navigator.clipboard.writeText(prompt);
    }
    return prompt
  }


  


  return (
    <div >
      <div>
        <div id="text">


          <HeroCarousel i={0} hero={heroes[heroId]} />

          <div style={{padding: '10px'}}>
            <h3>{heroes[heroId].name}</h3>
            <p><i>{heroes[heroId].slogan}</i></p>
            {heroes[heroId].abstract}
            {compilePrompt()}
          </div>
        </div>

        <div className="marginTB">
          
          <CheckBox title="style" id="rawStyle" cb={handleRawStateChange} checked={rawStyle} />
          <CheckBox title="personalize" id="personalize" cb={handlePersonalizeChange} checked={personalize} />
          <CheckBox title="quality" id="quality" cb={handleQualityChange} checked={quality} />
          0.9 USD per prompt

          Find out what the prompt is!


          words:&nbsp;{compilePrompt(false).split(' ').length} &nbsp;&nbsp;
          characters:&nbsp;{compilePrompt(false).length}

        </div>
      </div>
      <div className='container'>
        {Object.entries(heroes).map(([id, hero]) => (
          <HeroItem hero={hero} key={id} id={id} cb={handleHeroChange} selected={(heroId === Number(id)) ? true : false} />
        ))}
      </div>
    </div>
  );
}




export default HeroPage