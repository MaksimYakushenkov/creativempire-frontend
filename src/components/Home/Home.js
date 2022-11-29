import React from 'react';
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
import Blog from '../Blog/Blog';
import HeaderSlider from '../Slider/Slider';

function Home(props) {
  return (
    <main className='home'>
      <HeaderSlider />
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
      <Blog />
    </main>
  );
}

export default Home;