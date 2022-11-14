import React from 'react';
import SimpleSlider from '../Slider/Slider';
import OurServices from '../ourServices/OurServices';
import AboutUs from '../AboutUs/AboutUs';
import Statistics from '../Statistics/Statistics';
import DesignArea from '../DesignArea/DesignArea';
import LatestProjects from '../LatestProjects/LatestProjects';
import Work from '../Work/Work';
import FastButtons from '../FastButtons/FastButtons';
import PricePackages from '../PricePackages/PricePackages';
import Testimonials from '../Testimonials/Testimonials';
import ContactUs from '../ContactUs/ContactUs';

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
      <LatestProjects />
      <Work />
      <FastButtons />
      <PricePackages />
      <Testimonials />
      <ContactUs />
    </section>
  );
}

export default Home;