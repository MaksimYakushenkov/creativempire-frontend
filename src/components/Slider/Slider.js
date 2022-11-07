import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from '../../assets/images/slider/slide1.webp';
import slide2 from '../../assets/images/slider/slide2.webp';
import slide3 from '../../assets/images/slider/slide3.webp';
import imgageCaption from '../../assets/images/slider/design_slider.png';
import sliderDots from '../../assets/images/slider/slider-dots.png';
import sliderWaveLine from '../../assets/images/slider/slider-wave-line.png';
import sliderCircle from '../../assets/images/slider/slider-circle.png';

export default class SimpleSlider extends Component {
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
      <><div>
        <Slider {...settings}>
          <div>
            <div className="slide__container">
              <div className="slide__description">
                <h1 className="slider__header">Студия дизайна</h1>
                <h2 className="slider__title text-bottom-line">Creative Empire</h2>
                <p className="slider__paragraph">Лучшие креативные решения для вашего бизнеса или хобби! <br />Оставьте заявку и мы вам перезвоним.</p>
                <div className="slide__buttons">
                  <a href="#contact" className="page-scroll"><button className="slider__button slider__button_transparent">Контакты</button></a>
                  <button className="slider__button order__button">
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    Быстрый заказ
                  </button>
                </div>
              </div>
              <div className="slide__image-container">
                <img className="slide__image" alt="Студия креативного дизайна — Creative Empire" src={slide1} />
              </div>
              <img className="image__caption" alt="Студия креативного дизайна — Creative Empire" src={imgageCaption} />
            </div>
          </div>
          <div>
            <div className="slide__container">
              <div className="slide__description">
                <h1 className="slider__header">Мы — креатив</h1>
                <h2 className="slider__title text-bottom-line">Creative Empire</h2>
                <p className="slider__paragraph">Современный креатив продвигает.Поэтому наши лучшие решения <br />гарантированно поднимут вас на голову выше конкурентов.</p>
                <div>
                  <a href="#contact" className="page-scroll"><button className="slider__button slider__button_transparent">Контакты</button></a>
                  <button className="slider__button order__button">
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    Быстрый заказ
                  </button>
                </div>
              </div>
              <div className="slide__image-container">
                <img className="slide__image" alt="Студия креативного дизайна — Creative Empire" src={slide2} />
              </div>
              <img className="image__caption" alt="Студия креативного дизайна — Creative Empire" src={imgageCaption} />
            </div>
          </div>
          <div>
            <div className="slide__container">
              <div className="slide__description">


                <h1 className="slider__header">Мы — Design</h1>
                <h2 className="slider__title text-bottom-line">Creative Empire</h2>
                <p className="slider__paragraph">Уникальный дизайн каждому клиенту.Заставьте свой бизнес <br />работать на вас — а мы в этом поможем!</p>
                <div>
                  <a href="#contact" className="page-scroll"><button className="slider__button slider__button_transparent">Контакты</button></a>
                  <button className="slider__button order__button">
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    <span className="contact-form__span"></span>
                    Быстрый заказ
                  </button>
                </div>
              </div>
              <div className="slide__image-container">
                <img className="slide__image" alt="Студия креативного дизайна — Creative Empire" src={slide3} />
              </div>
              <img className="image__caption" alt="Студия креативного дизайна — Creative Empire" src={imgageCaption} />
            </div>
          </div>
        </Slider>
      </div><div className='slider__details'>
          <img className='slider__dots first' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
          <img className='slider__dots second' alt="Студия креативного дизайна — Creative Empire" src={sliderDots} />
          <img className='slider__wave-line' alt="Студия креативного дизайна — Creative Empire" src={sliderWaveLine} />
          <img className='slider_circle' alt="Студия креативного дизайна — Creative Empire" src={sliderCircle} />
        </div></>
    );
  }
}