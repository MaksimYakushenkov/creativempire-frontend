import React from 'react';
import serviceWeb from '../../assets/images/services/web_develope_creative_empire.webp';
import serviceUXUI from '../../assets/images/services/ux_ui_design_creative_empire.webp';
import serviceBanners from '../../assets/images/services/design_creative_empire.webp';
import serviceBrand from '../../assets/images/services/branding_creative_empire.webp';
import serviceLogo from '../../assets/images/services/logo_creative_empire.webp';
import serviceCreativeDesign from '../../assets/images/services/creative_design_creative_empire.webp';

function Services(props) {

  return (
    <section className='services pt-120 pb-120'>
      <div className='services__container'>
        <div className='latestProjects__header wow fadeInUp delay-0-2s'>
          <h3 className='section__title first-color'>••• Что мы умеем? •••</h3>
          <h2 className='section__subtitle'>Полный перечень наших услуг</h2>
        </div>
        
        <div className='services__grid'>

          <div className='services__item services__item_big'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceWeb} alt='Создание сайтов под ключ в Москве и по всей России' />
            </div>
            <div className='services__description'>
              <h2 className='services__title'>Создание сайтов под ключ</h2>
              <a className='services__button' href="./">Узнать подробнее</a>
            </div>
          </div>

          <div className='services__item services__item_small'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceUXUI} alt='Создание сайтов под ключ в Москве и по всей России' />
            </div>
            <div className='services__description'>
              <h2 className='services__title'>Создание сайтов под ключ</h2>
              <a className='services__button' href="./">Узнать подробнее</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;