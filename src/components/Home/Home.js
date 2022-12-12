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
      <HeaderSlider 
        isProcessing={props.isProcessing}
        setIsProcessing={props.setIsProcessing}
        isPopupSliderOpened={props.isPopupSliderOpened}
        setIsPopupSliderOpened={props.setIsPopupSliderOpened}
        infoData={props.infoData}
        setInfoData={props.setInfoData}
       />
      <OurServices />
      <AboutUs />
      <Statistics />
      <DesignArea innerWidth={props.innerWidth}/>
      <LatestProjects portfoliosData={props.portfoliosData} innerWidth={props.innerWidth} />
      <Work />
      <FastButtons />
      <PricePackages />
      <Testimonials innerWidth={props.innerWidth} />
      <ContactUs
          isPopupOpened={props.isPopupOpened}
          setIsPopupOpened={props.setIsPopupOpened}
          infoData={props.infoData}
          setInfoData={props.setInfoData}
          isProcessing={props.isProcessing}
          setIsProcessing={props.setIsProcessing}
      />
      <Blog articlesData={props.articlesData}/>
    </main>
  );
}

export default Home;