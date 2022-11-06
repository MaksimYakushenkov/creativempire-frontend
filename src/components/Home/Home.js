import React from 'react';
import SimpleSlider from '../Slider/Slider';
import sliderDots from '../../assets/images/slider/slider-dots.png';
import sliderWaveLine from '../../assets/images/slider/slider-wave-line.png';
import sliderCircle from '../../assets/images/slider/slider-circle.png';

function Home(props) {
  return (
    <section className='home'>
      <div className='slider'>
      <SimpleSlider />
      <div className='slider__details'>
        <img className='slider__dots first' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
        <img className='slider__dots second' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
        <img className='slider__wave-line' alt="Студия креативного дизайна — Creative Empire" src={sliderWaveLine} />
        <img className='slider_circle' alt="Студия креативного дизайна — Creative Empire" src={sliderCircle} />
      </div>
      </div>
    </section>
  );
}

export default Home;