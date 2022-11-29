import React from 'react';
import { Link } from 'react-router-dom';
import iconSend from '../../assets/images/icons/send.png';
import iconAccounting from '../../assets/images/icons/accounting.png';
import iconArrowRight from '../../assets/images/icons/arrow-right.png';

function FastButtons() {

  return (
    <section className='fastButtons'>
      <div className='fastButtons__container'>

      <div className='fastButtons__column wow fadeInRight delay-0-2s'>
        <div className='fastButtons__image-container'>
          <img className='fastButtons__image icon-50' src={iconAccounting} alt='Веб-студия креативного дизайна Creative Empire — заказать разработку сайта под ключ онлайн' />
        </div>
        <Link className='fastButtons__link' to='/calculator'>
          Есть идея проекта? <br/>Рассчитайте стоимость онлайн!
          <img className='fastButtons__image-link' src={iconArrowRight} alt='Веб-студия креативного дизайна Creative Empire — заказать разработку сайта под ключ онлайн'/>
        </Link>
      </div>

      <div className='fastButtons__column wow fadeInLeft delay-0-2s'>
        <div className='fastButtons__image-container'>
          <img className='fastButtons__image' src={iconSend} alt='Веб-студия креативного дизайна Creative Empire — заказать разработку сайта под ключ онлайн' />
        </div>
        <Link className='fastButtons__link' to='/contact'>
          Возникли вопросы? <br/>Свяжитесь с нами!
          <img className='fastButtons__image-link' src={iconArrowRight} alt='Веб-студия креативного дизайна Creative Empire — заказать разработку сайта под ключ онлайн'/>
        </Link>
      </div>

      </div>
    </section>
  );
}

export default FastButtons;