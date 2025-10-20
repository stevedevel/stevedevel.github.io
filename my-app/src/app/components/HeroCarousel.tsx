'use client'

import { useState } from 'react';
import { Hero } from '../Hero'
import { Carousel } from 'react-bootstrap';




function HeroCarousel({ hero, i = 0 }: { hero: Hero, i:number }) {


  let images = hero.aiImages || []
  //images = images.sort((a, b) => 0.5 - Math.random())

  const [index, setIndex] = useState((i>images.length) ? 0 : i);

  console.log("constructor HeroCarousel " + hero.name)

  const handleSelect = (selectedIndex:number) => {
    //if (selectedIndex > images.length) selectedIndex 
    console.log()
    setIndex(selectedIndex > images.length ? 0 : selectedIndex);
  };


//if ( index >= images.length) setIndex(0)

  return (
   

      <Carousel 
        activeIndex={index} 
        keyboard={true} 
        data-bs-theme="light" 
        touch={true}
        defaultActiveIndex={0} 
        onSelect={handleSelect} 
        style={{ float: 'left', aspectRatio: '1/1', marginRight: '10px', height: '100%' }}
      >
        {/** default item */}
        <Carousel.Item key={hero.name + 0}>
          <img
            className="d-block w-100"
            src={hero.image}
            alt={hero.name}
          />
          <Carousel.Caption data-bs-theme="light">
            <h3>{hero.name}</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        {(images).map((img, i) => (
          <Carousel.Item key={hero.name + (i+1)}>
            <img
              className="d-block w-100"
              src={"/api/images/" + img}
              alt={hero.name}
            />
            <Carousel.Caption>
              <h3>{hero.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

    
  );
}



export default HeroCarousel