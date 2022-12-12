import React, { Component, createRef } from "react";
import { Link } from 'react-router-dom';

import publicKey from '../../utils/emailJS/emailJS-config';
import emailjs from '@emailjs/browser';
import validation from '../Validation/Validation';

import iconDoubleRight from '../../assets/images/icons/double-right.png';
import iconEmail from '../../assets/images/icons/email.png';
import iconTG from '../../assets/images/icons/telegram.png';
import contactWaveLine from '../../assets/images/shapes/contact-wave-line.png';
import sliderDots from '../../assets/images/slider/slider-dots.png';
import contactDots from '../../assets/images/shapes/contact-dots.png';
import iconLoading from '../../assets/images/icons/loading.png';

export default class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: '',
      name: '',
      email: '',
      description: '',
      sociate:'',
      productValid: false,
      nameValid: false,
      emailValid: false,
      descriptionValid: false,
      formValid: false,
    }
    this.form = createRef();
    this.validation = validation;
    this.form = createRef();
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.setInfoData = this.props.setInfoData;
  }

  closePopup() {
    this.props.setIsPopupOpened(false);
  }

  resetForm() {
    this.setState({
      product: '',
      name: '',
      email: '',
      sociate: '',
      description: '',
      formValid: false,
    })
  }

  isFormValid() {
    this.setState({
      formValid: this.state.productValid && this.state.nameValid && this.state.emailValid && this.state.descriptionValid
    })
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name.replace('user_', '')]: value,
    })
    name !== 'user_sociate' &&
    this.setState({
      [`${name.replace('user_', '')}Valid`] :  this.validation.validateInput(e.target)
    }, this.isFormValid)
  }

  sendEmail(e) {
    e.preventDefault();
    this.props.setIsProcessing(true);
    emailjs.sendForm('creativempire', e.currentTarget.dataset.templateId, this.form.current, publicKey)
    .then((result) => {
        this.props.setIsProcessing(false);
        this.setInfoData({
          img: "ok",
          text: "Сообщение отправлено! Ждите скорого ответа",
        })
        this.props.setIsPopupOpened(true);
        this.resetForm();
    }, (error) => {
        this.props.setIsProcessing(false);
        this.setInfoData({
          img: "error",
          text: "Произошла ошибка. Попробуйте повторить позднее или свяжитесь с нами в соцсетях.",
        })
        this.props.setIsPopupOpened(true);
        console.log(error.text);
        return false
    });
  }

    render(){
      return (
        <section id="contactUS" className='contactUs'>
          <div className='contactUs__container'>
            <div className='contactUs__info-container z-1 wow fadeInRight delay-0-2s'>
    
              <div className='section__header text-inherit contactUs__header'>
                <h2 className='section__subtitle fs-40'>Воплотите любую задумку в <span>прибыльный</span> шедевр!</h2>
                <p className='section__paragraph'> Оставьте заявку и мы свяжемся с вами в <b>ближайшее время</b> или напишите нам на любой из контактов:</p>
              </div>
    
              <ul className='contactUs__list'>
                <li className="contactUs__list-item">
                  <div className='contactUs__image-container'>
                    <img src={iconEmail} alt='Иконка почты' />
                  </div>
                  <a href="mailto:order@creativempire.ru" className="contactUs__link">order@creativempire.ru</a>
                </li>
                <li className="contactUs__list-item">
                  <div className='contactUs__image-container'>
                    <img src={iconTG} alt='Иконка соцсети Телеграм'/>
                  </div>
                  <a href="https://t.me/creativempire" className="contactUs__link">Telegram</a>
                </li>
                {/* <li className="contactUs__list-item">
                  <div className='contactUs__image-container'>
                    <img src={iconWA} />
                  </div>
                  <a href="https://t.me/" className="contactUs__link">WhatsApp</a>
                </li> */}
                {/* <li className="contactUs__list-item">
                  <div className='contactUs__image-container'>
                    <img src={iconPhone} />
                  </div>
                  <a href="tel:+7-929-638-13-88" className="contactUs__link">+7-929-638-13-88</a>
                </li> */}
              </ul>
    
            </div>
    
            <div className='contactUs__form-container z-1 wow fadeInLeft delay-0-4s'>
              <h2 className='contactUs__form-header'>Я хочу заказать...</h2>
              <form ref={this.form} onSubmit={this.sendEmail} id='contact-form' className='contactUs__form' data-template-id='order_online' noValidate>

            <div className="contactUs__field">
              <input id="user_product" className="contactUs__input" onChange={this.handleChange} required name="user_product" value={this.state.product} type="text" placeholder="Что хотите заказать*"  />
              <span className="user_product-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="user_name" className="contactUs__input" onChange={this.handleChange} required name="user_name" value={this.state.name} type="text" placeholder="Ваше имя*"  />
              <span className="user_name-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="user_email" className="contactUs__input" onChange={this.handleChange} required name="user_email" type="email" value={this.state.email} placeholder="Ваш Email*"  />
              <span className="user_email-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <input id="user_sociate" className="contactUs__input" name="user_sociate" type="text" placeholder="Telegram/Whatsapp" value={this.state.sociate} onChange={this.handleChange}/>
              <span className="user_sociate-error error-message"></span>
            </div>

            <div className="contactUs__field">
              <textarea id="user_description" className="contactUs__input contactUs__textarea" onChange={this.handleChange} required name="user_description" value={this.state.description} type="text" placeholder="Описание проекта*" />
              <span className="user_description-error error-message"></span>
            </div>

            <div className='accept-rules'>
              <p className='accept-rules__paragraph'>Нажимая на кнопку вы даете согласие на обработку персональных данных и соглашаетесь с <Link to="/privacy-policy" target="_blank">политикой конфиденциальности</Link>.</p>
            </div>
            
            <button type="submit" className='contactUs__submit-button pricePackages__link' disabled={!this.state.formValid}>{this.props.isProcessing ? <><img className='submit__loading' src={iconLoading} alt='Иконка загрузки' /></> : <>Отправить<img src={iconDoubleRight} alt='Иконка стрелка вправо' /></>}</button>
            
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
  
}