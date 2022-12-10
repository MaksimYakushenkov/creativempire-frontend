import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo-white.png';
import iconDoubleRight from '../../assets/images/icons/double-right.png';
import iconLoading from '../../assets/images/icons/loading.png';
import validation from '../Validation/Validation';
import Popup from '../Popup/Popup';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import publicKey from '../../utils/emailJS/emailJS-config';
import emailjs from '@emailjs/browser';

function Footer(props) {
  const form = useRef();
  const [email, setEmail] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

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

  function closePopup() {
    props.setIsPopupOpened(false);
  }

  function isFormValid() {
    setFormValid(emailValid);
  }

  function resetForm() {
    setEmail('');
    setFormValid(false);
  }

  function sendEmail(e) {
    e.preventDefault();
    props.setIsProcessing(true);
    emailjs.sendForm('creativempire', e.currentTarget.dataset.templateId, form.current, publicKey)
    .then((result) => {
        props.setIsProcessing(false);
        props.setInfoData({
          img: "ok",
          text: "Благодарим за подписку! Совсем скоро вы начнете получать полезные предложения! :)",
        })
        props.setIsPopupOpened(true);
        resetForm();
    }, (error) => {
        props.setIsProcessing(false);
        props.setInfoData({
          img: "error",
          text: "Произошла ошибка. Попробуйте повторить позднее или свяжитесь с нами в соцсетях.",
        })
        props.setIsPopupOpened(true);
        console.log(error.text);
        return false
    });
  }

  function handleChange(e) {
    const {value} = e.target;
    setEmail(value)
    setEmailValid(validation.validateInput(e.target));
    isFormValid();
  }
 

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
            <li className='footer__list-item'><Link to="/services" className='footer__link'>Услуги и цены</Link></li>
            <li className='footer__list-item'><Link to="/portfolio" className='footer__link'>Портфолио</Link></li>
            <li className='footer__list-item'><Link to="/work-plan" className='footer__link'>План работы</Link></li>
            <li className='footer__list-item'><Link to="/contact" className='footer__link '>Контакты</Link></li>
            <li className='footer__list-item'><Link to="/calculator" className='footer__link'>Калькулятор</Link></li>
          </ul>
        </div>
        <div className='footer__subscribe wow fadeInRight delay-0-6s'>
          <h2 className='footer__header'>Подпишись на рассылку!</h2>
          <p className='footer__paragraph'>Будем присылать только нужные письма, обещаем.</p>
        
        <form ref={form} id="subscribe" onSubmit={sendEmail} className='footer__form' data-template-id='order_online' noValidate>
          <div className="contactUs__field">
            <input id="footerEmail" onChange={handleChange} className="contactUs__input" required value={email} name="user_email" type="email"  placeholder="Ваш Email*"  />
            <span className="user_email-error error-message"></span>
          </div>

          <div className='accept-rules'>
            <p className='accept-rules__paragraph'>Нажимая на кнопку вы даете согласие на обработку персональных данных и соглашаетесь с <Link to="/privacy-policy" target="_blank">политикой конфиденциальности</Link>.</p>
          </div>

          <button type="submit" className="contactUs__submit-button pricePackages__link" disabled={!formValid}>{props.isProcessing ? <><img className='submit__loading' src={iconLoading} /></> : <>Отправить<img src={iconDoubleRight} /></>}</button>

          </form>
        </div>
      </div>
      
      <div className='footer__copyright'>
        <p className='footer__paragraph'>© Copyright 2022 Creative Empire. Все права защищены.</p>
        <div className='footer__privacy'>
          <Link to="/personal" className='footer__privacy-link'>Обработка данных</Link>
          <Link to="/privacy-policy" className='footer__privacy-link'>Политика конфиденциальности</Link>
        </div>
      </div>
      <Popup 
      isPopupOpened={props.isPopupOpened}
      setIsPopupOpened={props.setIsPopupOpened}
      closePopup={closePopup}
      >
        <InfoToolTip 
        data={props.infoData}
      />
      </Popup>
    </footer>
  );
}

export default Footer;