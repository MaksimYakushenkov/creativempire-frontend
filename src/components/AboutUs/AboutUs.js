import React from 'react';
import aboutUsImage from '../../assets/images/about/about-one.jpg';
import aboutUsShape from '../../assets/images/shapes/image-left.png';
import iconIdea from '../../assets/images/icons/icon-idea.webp';
import iconPaperPlane2 from '../../assets/images/icons/icon-paper-plane-2.webp';
import iconGraphicTablet from '../../assets/images/icons/icon-graphic-tablet.webp';
import iconStartUp from '../../assets/images/icons/icon-startup.webp';

function AboutUs() {
  return (
    <section id="aboutUs" className='aboutUs'>
      <div className='aboutUs__container'>
        <div className='aboutUs__image-area wow fadeInRight delay-0-4s'>
         <img className='aboutUs__image' src={aboutUsImage} alt='Студия креативного дизайна — Creative Empire' />
         <img className='aboutUs__shape' src={aboutUsShape} alt='Студия креативного дизайна — Creative Empire' />
        </div>
        <div className='aboutUs__content wow fadeInLeft delay-0-2s'>
          <h3 className='section__title first-color as-c__m'>••• Почему мы? •••</h3>
          <h2 className='section__subtitle'>Наши сильные стороны</h2>
          <div className='aboutUs__box mt-50'>
            <div className='aboutUs__box-icon'>
              <img className='aboutUs__box-image' src={iconIdea} alt='Студия креативного дизайна — Creative Empire' />
            </div>
            <div className='aboutUs__box-text'>
              <h2 className='aboutUs__box-title'>Креативный дизайн</h2>
              <p className='aboutUs__box-description'>Мы живем дизайном и дышим креативом. Поэтому под любую задачу разработаем уникальную и технологичную концепцию.</p>
            </div>
          </div>
          <div className='aboutUs__box'>
            <div className='aboutUs__box-icon'>
              <img className='aboutUs__box-image' src={iconGraphicTablet} alt='Студия креативного дизайна — Creative Empire' />
            </div>
            <div className='aboutUs__box-text'>
              <h2 className='aboutUs__box-title'>Инновационная графика</h2>
              <p className='aboutUs__box-description'>Простые креативы уже не в моде. Мы задаем собственный тон нашим работам и отвечаем за использование современных решений.</p>
            </div>
          </div>
          <div className='aboutUs__box'>
            <div className='aboutUs__box-icon'>
              <img className='aboutUs__box-image' src={iconStartUp} alt='Студия креативного дизайна — Creative Empire' />
            </div>
            <div className='aboutUs__box-text'>
              <h2 className='aboutUs__box-title'>Создаем лучший UX/UI</h2>
              <p className='aboutUs__box-description'>Мы постоянно анализируем конкурентов и создаем лучшие продукты, которые полностью удовлетворят желания целевой аудитории.</p>
            </div>
          </div>
          <div className='aboutUs__box'>
            <div className='aboutUs__box-icon'>
              <img className='aboutUs__box-image' src={iconPaperPlane2} alt='Студия креативного дизайна — Creative Empire' />
            </div>
            <div className='aboutUs__box-text'>
              <h2 className='aboutUs__box-title'>Безграничная поддержка</h2>
              <p className='aboutUs__box-description'>Даже после успешной сдачи проекта заказчику, мы всегда готовы оказать посильную поддержку и развитие продукта в будущем.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;