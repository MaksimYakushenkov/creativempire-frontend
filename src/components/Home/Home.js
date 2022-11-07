import React from 'react';
import SimpleSlider from '../Slider/Slider';
import OurServices from '../ourServices/OurServices';

function Home(props) {
  return (
    <section className='home'>
      <div className='slider'>
      <SimpleSlider />
      </div>
      <OurServices />
    </section>
  );
}

export default Home;