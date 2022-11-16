import React from 'react';
import sliderDots from '../../assets/images/slider/slider-dots.png';
import sliderWaveLine from '../../assets/images/slider/slider-wave-line.png';
import designAreaMiddle from '../../assets/images/design-area/design-middle.png';
import iconRightArrow from '../../assets/images/icons/right-arrow.webp';
import iconIdea from '../../assets/images/icons/idea.webp';
import iconWebPage from '../../assets/images/icons/web-page.webp';
import iconShopping from '../../assets/images/icons/shopping.webp';
import iconSeo from '../../assets/images/icons/seo.webp';
import iconUserExperience from '../../assets/images/icons/user-experience.webp';
import iconGraphicDesign from '../../assets/images/icons/graphic-design.webp';

function DesignArea() {

  return (
    <section className='design-area pt-120 pb-120'>
      <div className='design-area__container'>
        <div className='design-area__header wow fadeInUp delay-0-2s'>
          <h3 className='section__title first-color'>••• А вы знали, что... •••</h3>
          <h2 className='section__subtitle'>Нашими услугами по <br />веб-разработке являются</h2>
        </div>
        <div className='design-area__details'>
          <div className='design-area__column wow fadeInLeft delay-0-2s'>
            <div className='design-area__column-item ml-30'>
              <img className='design-area__column-image' src={iconIdea} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
              Создание <br/>веб-сайта с 0
                <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
              </a>
            </div>
            <div className='design-area__column-item'>
            <img className='design-area__column-image' src={iconWebPage} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
              Обслуживание вашего сайта
                <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
              </a>
            </div>
          </div>
          <div className='design-area__row wow fadeInUp delay-0-2s'>
          <div className='design-area__middle'>
                <img className='design-area__middle-image' src={designAreaMiddle} alt='Test' />
                </div>
            <div className='design-area__column-item'>
               
                <img className='design-area__column-image' src={iconShopping} alt='Test' />
                <a className='design-area__column-link' href='https://github.com'>
                  Интернет-магазины <br/>и eCommerce
                  <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
                </a>
            </div>
            <div className='design-area__column-item mb_60'>
            <img className='design-area__column-image' src={iconSeo} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
                Проведение SEO оптимизации
                <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
              </a>
            </div>
          </div>
          <div className='design-area__column wow fadeInRight delay-0-2s'>
            <div className='design-area__column-item'>
                <img className='design-area__column-image' src={iconUserExperience} alt='Test' />
                <a className='design-area__column-link' href='https://github.com'>
                Исследование пользовательского опыта
                  <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
                </a>
            </div>
            <div className='design-area__column-item ml-30'>
            <img className='design-area__column-image' src={iconGraphicDesign} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
              Разработка UX/UI дизайна
                <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='design-area__shapes'>
        <img className='design-area__dots' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
        <img className='design-area__wave-line' alt="Студия креативного дизайна — Creative Empire" src={sliderWaveLine} />
      </div>
    </section>
  );
}

export default DesignArea;