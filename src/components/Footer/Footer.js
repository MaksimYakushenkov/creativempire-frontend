import React from 'react';
import logo from '../../assets/images/logos/logo-white.png';
import iconDoubleRight from '../../assets/images/icons/double-right.png';

function Footer() {
  React.useEffect(() => {
    const formContainer = document.querySelector('.footer__subscribe');
    const inputElement = document.getElementById('footerEmail');
    const formElement = document.getElementById('subscribe');

    inputElement.addEventListener('focus', () => {
      formContainer.classList.add('footer__subscribe-shadow');
    });
    formElement.addEventListener('submit', () => {
      formContainer.classList.remove('footer__subscribe-shadow');
    });
  }, []);
 

  return (
    <footer className='footer'>

      <div className='footer__container'>
        <div className='footer__description pt-35 wow fadeInLeft delay-0-2s'>
          <a href='./'>
          <img className='footer__logo' src={logo} alt="Веб-студия креативного дизайна Creative Empire" />
          </a>
          <p className='footer__paragraph'>Веб-студия креативного дизайна Creative Empire предлагает только лучшие и современные решения по доступной цене. Мы работаем на качество и всегда готовы пойти на компромисс с клиентом, если это, конечно, не нарушает нашу основную миссию.</p>
          <div className='footer__social'>
            <a className='footer__social-link' href="ya.ru"><i className='footer__i vkontakte'></i></a>
            <a className='footer__social-link' href="ya.ru"><i className='footer__i telegram'></i></a>
          </div>
        </div>
        <div className='footer__links pt-35 wow fadeInUp delay-0-4s'>
          <h3 className='footer__header'>Быстрые ссылки</h3>
          <ul className='footer__list'>
            <li className='footer__list-item'><a className='footer__link' href="ya.ru" >Quick Link</a></li>
            <li className='footer__list-item'><a className='footer__link' href="ya.ru" >Quick Link</a></li>
            <li className='footer__list-item'><a className='footer__link' href="ya.ru" >Quick Link</a></li>
            <li className='footer__list-item'><a className='footer__link' href="ya.ru" >Quick Link</a></li>
            <li className='footer__list-item'><a className='footer__link' href="ya.ru" >Quick Link</a></li>
          </ul>
        </div>
        <div className='footer__subscribe wow fadeInRight delay-0-6s'>
          <h2 className='footer__header'>Подпишись на рассылку!</h2>
          <p className='footer__paragraph'>Будем присылать только нужные письма, обещаем.</p>
        <form id="subscribe" className="footer__form" noValidate>
          <div className="contactUs__field">
            <input id="footerEmail" className="contactUs__input" required name="footerEmail" type="email"  placeholder="Ваш Email*"  />
            <span className="email-error error-message"></span>
          </div>

          <button type="submit" className="contactUs__submit-button pricePackages__link" disabled>Отправить<img src={iconDoubleRight} /></button>

          </form>
        </div>
      </div>
      
      <div className='footer__copyright'>
        <p className='footer__paragraph'>© Copyright 2022 Creative Empire. Все права защищены.</p>
      </div>

    </footer>
  );
}

export default Footer;