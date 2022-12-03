import React from 'react';
import iconDoubleRight from '../../assets/images/icons/double-right.png';
import iconPhone from '../../assets/images/icons/phone.png';
import iconEmail from '../../assets/images/icons/email.png';
import iconWA from '../../assets/images/icons/whatsapp.png';
import iconTG from '../../assets/images/icons/telegram.png';
import contactWaveLine from '../../assets/images/shapes/contact-wave-line.png';
import sliderDots from '../../assets/images/slider/slider-dots.png';
import contactDots from '../../assets/images/shapes/contact-dots.png';

function ContactUs() {

  return (
    <section id="contact" className='contactUs'>
      <div className='contactUs__container'>
        <div className='contactUs__info-container z-1 wow fadeInRight delay-0-2s'>

          <div className='section__header text-inherit contactUs__header'>
            <h2 className='section__subtitle fs-40'>Воплотите любую задумку в <span>прибыльный</span> шедевр!</h2>
            <p className='section__paragraph'> Оставьте заявку и мы свяжемся с вами в <b>ближайшее время</b> или напишите нам на любой из контактов:</p>
          </div>

          <ul className='contactUs__list'>
            <li className="contactUs__list-item">
              <div className='contactUs__image-container'>
                <img src={iconEmail} />
              </div>
              <a href="mailto:order@creativempire.ru" className="contactUs__link">order@creativempire.ru</a>
            </li>
            <li className="contactUs__list-item">
              <div className='contactUs__image-container'>
                <img src={iconTG} />
              </div>
              <a href="https://t.me/creativempire" className="contactUs__link">Telegram</a>
            </li>
            <li className="contactUs__list-item">
              <div className='contactUs__image-container'>
                <img src={iconWA} />
              </div>
              <a href="https://t.me/" className="contactUs__link">WhatsApp</a>
            </li>
            <li className="contactUs__list-item">
              <div className='contactUs__image-container'>
                <img src={iconPhone} />
              </div>
              <a href="tel:+7-929-638-13-88" className="contactUs__link">+7-929-638-13-88</a>
            </li>
          </ul>

        </div>

        <div className='contactUs__form-container z-1 wow fadeInLeft delay-0-4s'>
          <h2 className='contactUs__form-header'>Я хочу заказать...</h2>
          <form className="contactUs__form" noValidate>

            <div className="contactUs__field">
              <input id="product" className="contactUs__input" required name="product" type="text" placeholder="Что хотите заказать*"  />
              <span className="name-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="name" className="contactUs__input" required name="name" type="text" placeholder="Ваше имя*"  />
              <span className="name-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="email" className="contactUs__input" required name="email" type="email"  placeholder="Ваш Email*"  />
              <span className="email-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="sociate" className="contactUs__input" required name="sociate" type="text" placeholder="Telegram/Whatsapp" />
              <span className="name-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <textarea id="projectDescription" className="contactUs__input contactUs__textarea" required name="password" type="password" placeholder="Описание проекта*"  />
              <span className="password-error error-message"></span>
            </div>

            <button type="submit" className="contactUs__submit-button pricePackages__link" disabled>Отправить<img src={iconDoubleRight} /></button>
          </form>
        </div>
      </div>

      <div className='contactUs__shapes'>
        <img className='contactUs__dots' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
        <img className='contactUs__wave-line' alt="Студия креативного дизайна — Creative Empire" src={contactWaveLine} />
        <img className='contactUs__contactDots' alt="Студия креативного дизайна — Creative Empire" src={contactDots} />
      </div>
    </section>
  );
}

export default ContactUs;