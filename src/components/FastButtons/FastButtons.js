import React from 'react';
import iconSend from '../../assets/images/icons/send.png';
import iconAccounting from '../../assets/images/icons/accounting.png';
import iconArrowRight from '../../assets/images/icons/arrow-right.png';

function FastButtons() {

  return (
    <section className='fastButtons'>
      <div className='fastButtons__container'>

      <div className='fastButtons__column wow fadeInRight delay-0-2s'>
        <div className='fastButtons__image-container'>
          <img className='fastButtons__image icon-50' src={iconAccounting} />
        </div>
        <a className='fastButtons__link' href="ya.ru">
          Есть идея проекта? <br/>Рассчитайте стоимость онлайн!
          <img className='fastButtons__image-link' src={iconArrowRight} />
        </a>
      </div>

      <div className='fastButtons__column wow fadeInLeft delay-0-2s'>
        <div className='fastButtons__image-container'>
          <img className='fastButtons__image' src={iconSend} />
        </div>
        <a className='fastButtons__link' href="ya.ru">
          Возникли вопросы? <br/>Свяжитесь с нами!
          <img className='fastButtons__image-link' src={iconArrowRight} />
        </a>
      </div>

      </div>
    </section>
  );
}

export default FastButtons;