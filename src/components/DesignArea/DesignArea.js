import React from 'react';
import sliderDots from '../../assets/images/slider/slider-dots.png';
import sliderWaveLine from '../../assets/images/slider/slider-wave-line.png';
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
        <div className='design-area__header'>
          <h3 className='section__title first-color'>••• А вы знали, что... •••</h3>
          <h2 className='section__subtitle'>Особенности нашей веб-разработки</h2>
        </div>
        <div className='design-area__details'>
          <div className='design-area__column'>
            <div className='design-area__column-item'>
              <img className='design-area__column-image' src={iconIdea} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
                Текст на ссылке
                <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
              </a>
            </div>
            <div className='design-area__column-item'>
            <img className='design-area__column-image' src={iconIdea} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
                Текст на ссылке
                <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
              </a>
            </div>
          </div>
          <div className='design-area__row'>
            <div className='design-area__column-item'>
                <img className='design-area__column-image' src={iconIdea} alt='Test' />
                <a className='design-area__column-link' href='https://github.com'>
                  Текст на ссылке
                  <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
                </a>
            </div>
            <div className='design-area__column-item'>
            <img className='design-area__column-image' src={iconIdea} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
                Текст на ссылке
                <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
              </a>
            </div>
          </div>
          <div className='design-area__column'>
            <div className='design-area__column-item'>
                <img className='design-area__column-image' src={iconIdea} alt='Test' />
                <a className='design-area__column-link' href='https://github.com'>
                  Текст на ссылке
                  <img className='design-area__arrow' src={iconRightArrow} alt='Test' />
                </a>
            </div>
            <div className='design-area__column-item'>
            <img className='design-area__column-image' src={iconIdea} alt='Test' />
              <a className='design-area__column-link' href='https://github.com'>
                Текст на ссылке
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