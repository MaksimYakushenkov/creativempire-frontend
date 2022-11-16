import React from 'react';
import Slider from "react-slick";
import iconLink from '../../assets/images/icons/link.webp';
import project1 from '../../assets/images/projects/project1.jpg';
import project2 from '../../assets/images/projects/project2.jpg';
import project3 from '../../assets/images/projects/project3.jpg';
import project4 from '../../assets/images/projects/project4.jpg';
import project5 from '../../assets/images/projects/project5.jpg';
import project6 from '../../assets/images/projects/project6.jpg';

function LatestProjects() {
  
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

  };

  return (
    <section className='latestProjects'>
      <div className='latestProjects__header wow fadeInUp delay-0-2s'>
          <h3 className='section__title first-color'>••• Последние проекты •••</h3>
          <h2 className='section__subtitle'>Посмотрите примеры наших работ</h2>
      </div>
      <Slider {...settings} className='latestProjects__slider'>
        <div>
          <div className='latestProjects__project wow fadeInUp delay-0-2s'>
            <img className='latestProjects__image' src={project1} />
            <div className='latestProjects__description'>
              <a className='latestProjects__title' target='_blank' href='ya.ru'>Разработка дизайна интернет-магазина</a>
              <p className='latestProjects__subtitle'>Веб-разработка</p>
            </div>
            <div className='latestProjects__hover-container'>
              <a className='latestProjects__hover-link' target='_blank' href='ya.ru'><img className='latestProjects__hover-image' src={iconLink} /></a>
            </div>
          </div>
        </div>
        <div>
          <div className='latestProjects__project wow fadeInUp delay-0-4s'>
            <img className='latestProjects__image' src={project2} />
            <div className='latestProjects__description'>
              <a className='latestProjects__title' target='_blank' href='ya.ru'>Посадочная страница таролога</a>
              <p className='latestProjects__subtitle'>Веб-разработка</p>
            </div>
            <div className='latestProjects__hover-container'>
              <a className='latestProjects__hover-link' target='_blank' href='ya.ru'><img className='latestProjects__hover-image' src={iconLink} /></a>
            </div>
          </div>
        </div>
        <div>
          <div className='latestProjects__project wow fadeInUp delay-0-6s'>
            <img className='latestProjects__image' src={project3} />
            <div className='latestProjects__description'>
              <a className='latestProjects__title' target='_blank' href='ya.ru'>Логотип бренда "Coffee House"</a>
              <p className='latestProjects__subtitle'>Креативный дизайн</p>
            </div>
            <div className='latestProjects__hover-container'>
              <a className='latestProjects__hover-link' target='_blank' href='ya.ru'><img className='latestProjects__hover-image' src={iconLink} /></a>
            </div>
          </div>
        </div>
        <div>
          <div className='latestProjects__project wow fadeInUp delay-0-2s'>
            <img className='latestProjects__image' src={project4} />
            <div className='latestProjects__description'>
              <a className='latestProjects__title' target='_blank' href='ya.ru'>Оформление соцсетей для блогера</a>
              <p className='latestProjects__subtitle'>Дизайн в соцсетях</p>
            </div>
            <div className='latestProjects__hover-container'>
              <a className='latestProjects__hover-link' target='_blank' href='ya.ru'><img className='latestProjects__hover-image' src={iconLink} /></a>
            </div>
          </div>
        </div>
        <div>
          <div className='latestProjects__project wow fadeInUp delay-0-4s'>
            <img className='latestProjects__image' src={project5} />
            <div className='latestProjects__description'>
              <a className='latestProjects__title' target='_blank' href='ya.ru'>Разработка дизайна мобильного приложения</a>
              <p className='latestProjects__subtitle'>Разработка UX/UI дизайна</p>
            </div>
            <div className='latestProjects__hover-container'>
              <a className='latestProjects__hover-link' target='_blank' href='ya.ru'><img className='latestProjects__hover-image' src={iconLink} /></a>
            </div>
          </div>
        </div>
        <div>
          <div className='latestProjects__project wow fadeInUp delay-0-6s'>
            <img className='latestProjects__image' src={project6} />
            <div className='latestProjects__description'>
              <a className='latestProjects__title' target='_blank' href='ya.ru'>Брендирование интернет-магазина</a>
              <p className='latestProjects__subtitle'>Креативный дизайн</p>
            </div>
            <div className='latestProjects__hover-container'>
              <a className='latestProjects__hover-link' target='_blank' href='ya.ru'><img className='latestProjects__hover-image' src={iconLink} /></a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default LatestProjects;