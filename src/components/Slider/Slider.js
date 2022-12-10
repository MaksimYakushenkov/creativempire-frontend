import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import slide1 from '../../assets/images/slider/slide1.webp';
import slide2 from '../../assets/images/slider/slide2.webp';
import slide3 from '../../assets/images/slider/slide3.webp';
import imgageCaption from '../../assets/images/slider/design_slider.png';
import sliderDots from '../../assets/images/slider/slider-dots.png';
import sliderWaveLine from '../../assets/images/slider/slider-wave-line.png';
import sliderCircle from '../../assets/images/slider/slider-circle.png';
import iconDoubleRight from '../../assets/images/icons/double-right.png';
import validation from '../Validation/Validation';
import iconLoading from '../../assets/images/icons/loading.png';
import publicKey from '../../utils/emailJS/emailJS-config';
import emailjs from '@emailjs/browser';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default class HeaderSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      nameValid: false,
      phoneValid: false,
      formValid: false,
      isFormSend: false,
    }
    this.validation = validation;
    this.form = createRef();
    this.setInfoData = props.setInfoData;
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.callBack = this.callBack.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  isFormValid() {
    this.setState({
      formValid: this.state.nameValid && this.state.phoneValid
  });
  }

  closePopup() {
    this.props.setIsPopupSliderOpened(false);
    this.setState({
      isFormSend: false,
    });
  }

  resetForm() {
    this.setState({
      name: '',
      phone: '',
      formValid: false,
    })
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
    if (name === 'user_name') {
      this.setState({
        nameValid :  this.validation.validateInput(e.target)
      }, this.isFormValid)
    } else if (name === 'user_phone'){
      this.setState({
        phoneValid :  this.validation.validateInput(e.target)
      }, this.isFormValid)
    }
  }

  sendEmail(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    this.props.setIsProcessing(true);
    emailjs.sendForm('creativempire', e.currentTarget.dataset.templateId, this.form.current, publicKey)
    .then((result) => {
        this.props.setIsProcessing(false);
        this.setState({
          isFormSend: true,
        });
        this.props.setInfoData({
          img: "ok",
          text: "Сообщение отправлено. Ожидайте скорого звонка!",
        })
        this.resetForm();
    }, (error) => {
        this.props.setIsProcessing(false);
        this.props.setInfoData({
          img: "error",
          text: "Произошла ошибка. Попробуйте повторить позднее или свяжитесь с нами в соцсетях.",
        })
        console.log(error.text);
        this.setState({
          isFormSend: true,
        });
    });
  }

  callBack() {
    this.props.setIsPopupSliderOpened(true);
  }

  render() {
    const settings = {
    infinite: true,
    arrows: false,
    accessibility: true,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    lazyLoad: true,
    };
    return (
      <>
      <section className="slider">
        <div>
          <Slider {...settings}>
            <div>
              <div className="slide__container">
                <div className="slide__description">
                  <h1 className="slider__header">Digital-студия</h1>
                  <h2 className="slider__title text-bottom-line">Creative Empire</h2>
                  <p className="slider__paragraph">Лучшие креативные решения для вашего бизнеса или хобби! Оставьте заявку и мы вам перезвоним.</p>
                  <div className="slide__buttons">
                    <Link className='slider__button slider__button_transparent' to='/contact'>Контакты
                      <img src={iconDoubleRight} />
                    </Link>
                    <button onClick={this.callBack} className="slider__button">
                      Быстрый заказ
                      <img src={iconDoubleRight} />
                    </button>
                  </div>
                </div>
                <div className="slide__image-container">
                  <img className="slide__image" alt="Студия креативного дизайна — Creative Empire" src={slide1} />
                </div>
              </div>
            </div>
            <div>
              <div className="slide__container">
                <div className="slide__description">
                  <h1 className="slider__header">Мы — Креатив</h1>
                  <h2 className="slider__title text-bottom-line">Creative Empire</h2>
                  <p className="slider__paragraph">Современный креатив продвигает. Поэтому наши лучшие решения гарантированно поднимут вас на голову выше конкурентов.</p>
                  <div className="slide__buttons">
                    <Link className='slider__button slider__button_transparent' to='/contact'>Контакты
                      <img src={iconDoubleRight} />
                    </Link>
                    <button onClick={this.callBack} className="slider__button">
                      Быстрый заказ
                      <img src={iconDoubleRight} />
                    </button>
                  </div>
                </div>
                <div className="slide__image-container">
                  <img className="slide__image" alt="Студия креативного дизайна — Creative Empire" src={slide2} />
                </div>
              </div>
            </div>
            <div>
              <div className="slide__container">
                <div className="slide__description">


                  <h1 className="slider__header">Мы — Дизайн</h1>
                  <h2 className="slider__title text-bottom-line">Creative Empire</h2>
                  <p className="slider__paragraph">Уникальный дизайн каждому клиенту. Заставьте свой бизнес работать на вас — а мы в этом поможем!</p>
                  <div className="slide__buttons">
                    <Link className='slider__button slider__button_transparent' to='/contact'>Контакты
                    <img src={iconDoubleRight} />
                    </Link>
                    <button onClick={this.callBack} className="slider__button">
                      Быстрый заказ
                      <img src={iconDoubleRight} />
                    </button>
                  </div>
                </div>
                <div className="slide__image-container">
                  <img className="slide__image" alt="Студия креативного дизайна — Creative Empire" src={slide3} />
                </div>

              </div>
            </div>
          </Slider>
        </div>
        <div className='slider__details'>
          <img className='slider__dots first' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
          <img className='slider__dots second' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
          <img className='slider__wave-line' alt="Студия креативного дизайна — Creative Empire" src={sliderWaveLine} />
          <img className='slider_circle' alt="Студия креативного дизайна — Creative Empire" src={sliderCircle} />
        </div>
      </section>
      <PopupWithForm
        popupName="popup-slider"
        isPopupWithFormOpened={this.props.isPopupSliderOpened}
        setIsPopupWithFormOpened={this.props.setIsPopupSliderOpened}
        closePopup={this.closePopup}
      >
        {this.state.isFormSend ?
          <InfoToolTip
            data={this.props.infoData} />
          :
          <div className='contactUs__form-container'>
            <h2 className='contactUs__form-header'>Хочу поговорить о...</h2>
            <form ref={this.form} onSubmit={this.sendEmail} data-template-id='callback' className="contactUs__form" noValidate>

              <div className="contactUs__field">
                <input id="user_name" className="contactUs__input" onChange={this.handleChange} required name="user_name" value={this.name} type="text" placeholder="Ваше имя*" />
                <span className="user_name-error error-message"></span>
              </div>

              <div className="contactUs__field">
                <input id="user_phone" className="contactUs__input" onChange={this.handleChange} required name="user_phone" type="text" value={this.phone} placeholder="Ваш номер*" />
                <span className="user_phone-error error-message"></span>
              </div>

              <div className='accept-rules'>
                <p className='accept-rules__paragraph'>Нажимая на кнопку вы даете согласие на обработку персональных данных и соглашаетесь с <Link to="/privacy-policy" target="_blank">политикой конфиденциальности</Link>.</p>
              </div>

              <button type="submit" className='contactUs__submit-button pricePackages__link' disabled={!this.state.formValid}>{this.props.isProcessing ? <><img className='submit__loading' src={iconLoading} /></> : <>Перезвоните мне!</>}</button>
            </form>
          </div>}
      </PopupWithForm>
    </>
    );
  }
}