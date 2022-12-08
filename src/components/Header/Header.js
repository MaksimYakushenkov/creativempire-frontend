import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import contactMail from '../../assets/images/icons/contact-mail.png';
import validation from '../Validation/Validation';
import iconLoading from '../../assets/images/icons/loading.png';
import publicKey from '../../utils/emailJS/emailJS-config';
import emailjs from '@emailjs/browser';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Header(props) {
  const form = useRef();
  const [isFormSend, setIsFormSend] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [product, setProduct] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [productVaild, setProductVaild] = React.useState(false);
  const [nameVaild, setNameVaild] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [descriptionVaild, setDescriptionVaild] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  function closePopup() {
    props.setIsPopupWithFormOpened(false);
    setIsFormSend(false);
  }

  function sendEmail(e) {
    e.preventDefault();
    props.setIsProcessing(true);
    emailjs.sendForm('creativempire', e.currentTarget.dataset.templateId, form.current, publicKey)
    .then((result) => {
        props.setIsProcessing(false);
        setIsFormSend(true);
        props.setInfoData({
          img: "ok",
          text: "Сообщение отправлено! Ждите скорого ответа",
        })
        resetForm();
    }, (error) => {
        props.setIsProcessing(false);
        props.setInfoData({
          img: "error",
          text: "Произошла ошибка. Попробуйте повторить позднее или свяжитесь с нами в соцсетях.",
        })
        console.log(error.text);
        setIsFormSend(true);
    });
  }
  
  function resetForm() {
    setEmail('');
    setDescription('');
    setProduct('');
    setProduct('');
    setName('');
    setFormValid(false);
  }

  function isFormValid() {
    setFormValid(emailValid && nameVaild && productVaild && descriptionVaild);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    if (name === 'user_product') {
      setProduct(value);
      setProductVaild(validation.validateInput(e.target));
      isFormValid();
    } else if (name === 'user_name') {
      setName(value)
      setNameVaild(validation.validateInput(e.target));
      isFormValid();
    } else if (name === 'user_email') {
      setEmail(value)
      setEmailValid(validation.validateInput(e.target));
      isFormValid();
    } else if (name === 'user_description') {
      setDescription(value)
      setDescriptionVaild(validation.validateInput(e.target));
      isFormValid();
    }
  }

  function fastOrder() {
    props.setIsPopupWithFormOpened(true);
  }
  
  return (
      <>
      {props.innerWidth <= 767 &&
        <>
        <header className={`header ${props.stickyHeader ? 'header__sticky' : ''}`}>
          <div className='header__container'>
            <Menu innerWidth={props.innerWidth} />
            <button onClick={fastOrder} className='order__button order__button_small'><img className='order__button-image' src={contactMail} alt='Заказать вебсайт онлайн' /></button>
          </div>
        </header>
        <ul className='menu__mobile-list'>
          <li className=''><Link className='menu__mobile-item mobile-home' to='/'>Главная</Link></li>
          <li className=''><Link className='menu__mobile-item mobile-services' to='/services'>Услуги</Link></li>
          <li className='menu__mobile-item'><Link className='mobile__link-button' to='/calculator'></Link></li>
          <li className=''><Link className='menu__mobile-item mobile-portfolio' to='/portfolio'>Портфолио</Link></li>
          <li className=''><Link className='menu__mobile-item mobile-contacts' to='/contact'>Контакты</Link></li>
        </ul>
        </>
      }
      {
        props.innerWidth > 767 && 
        <header className={`header ${props.stickyHeader ? 'header__sticky' : ''}`}>
          <div className='header__container'>
            <Menu innerWidth={props.innerWidth}/>
            <button onClick={fastOrder} className={`order__button ${ props.innerWidth <= 1023 && props.innerWidth > 767 && 'order__button_small'}`}>
              {props.innerWidth > 1023 && <><span className="contact-form__span"></span><span className="contact-form__span"></span><span className="contact-form__span"></span><span className="contact-form__span"></span></>}
              { props.innerWidth <= 1023 && props.innerWidth > 767 && 
                <img className='order__button-image' src={contactMail} alt='Заказать вебсайт онлайн' />
              }
              { props.innerWidth > 1023 && 'Быстрый заказ'}
            </button>
          </div>
        </header> 
      }
      <PopupWithForm
      popupName="popup-header"
      isPopupWithFormOpened={props.isPopupWithFormOpened}
      setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
      closePopup={closePopup}
      >
        {isFormSend ?
        <InfoToolTip 
        data={props.infoData}
        />
        :
        <div className='contactUs__form-container'>
          <h2 className='contactUs__form-header'>Я хочу заказать...</h2>
          <form ref={form} onSubmit={sendEmail} data-template-id='order_online' className="contactUs__form" noValidate>

          <div className="contactUs__field">
              <input id="user_product" className="contactUs__input" onChange={handleChange} required name="user_product" value={product} type="text" placeholder="Что хотите заказать*"  />
              <span className="user_product-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="user_name" className="contactUs__input" onChange={handleChange} required name="user_name" value={name} type="text" placeholder="Ваше имя*"  />
              <span className="user_name-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="user_email" className="contactUs__input" onChange={handleChange} required name="user_email" type="email" value={email} placeholder="Ваш Email*"  />
              <span className="user_email-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="user_sociate" className="contactUs__input" name="user_sociate" type="text" placeholder="Telegram/Whatsapp" />
              <span className="user_sociate-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <textarea id="user_description" className="contactUs__input contactUs__textarea" onChange={handleChange} required name="user_description" value={description} type="text" placeholder="Описание проекта*" />
              <span className="user_description-error error-message"></span>
            </div>
            <button type="submit" className='contactUs__submit-button pricePackages__link' disabled={!formValid}>{props.isProcessing ? <><img className='submit__loading' src={iconLoading} /></> : <>Отправить</>}</button>
          </form>
        </div>
        }
      </PopupWithForm>
      </>
  );
}

export default Header;