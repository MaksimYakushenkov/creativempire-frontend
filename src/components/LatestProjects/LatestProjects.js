import React from 'react';
import Slider from "react-slick";
import iconLink from '../../assets/images/icons/link.webp';
import project1 from '../../assets/images/projects/project1.jpg';
import project2 from '../../assets/images/projects/project2.jpg';
import project3 from '../../assets/images/projects/project3.jpg';
import project4 from '../../assets/images/projects/project4.jpg';
import project5 from '../../assets/images/projects/project5.jpg';
import project6 from '../../assets/images/projects/project6.jpg';
import LastProject from '../LastProject/LastProject';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

function LatestProjects(props) {
  
  
  const settings = props.innerWidth > 1023 ? { 
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
  } : props.innerWidth > 767 ?
  { 
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
  } : 
  { 
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section id="latestProjects" className='latestProjects'>
      <div className='latestProjects__header wow fadeInUp delay-0-2s'>
          <h3 className='section__title first-color'>••• Последние проекты •••</h3>
          <h2 className='section__subtitle'>Посмотрите примеры наших работ</h2>
      </div>
      <Slider {...settings} className='latestProjects__slider'>
        {props.portfoliosData.map((portfolio) => (<LastProject key={portfolio._id} {...portfolio}/>))}
      </Slider>
    </section>
  );
}

export default LatestProjects;