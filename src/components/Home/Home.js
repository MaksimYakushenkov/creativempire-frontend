import React from 'react';
import SimpleSlider from '../Slider/Slider';
import OurServices from '../ourServices/OurServices';
import AboutUs from '../AboutUs/AboutUs';
import Statistics from '../Statistics/Statistics';
import DesignArea from '../DesignArea/DesignArea';

function Home(props) {
  return (
    <section className='home'>
      <div className='slider'>
      <SimpleSlider />
      </div>
      <OurServices />
      <AboutUs />
      <Statistics />
      <DesignArea />
    </section>
  );
}

export default Home;