import { React, Component } from 'react';
import Slider from 'react-slick';

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  
  render() {

  const settings = this.props.innerWidth > 1023 ? { 
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
  } : this.props.innerWidth > 767 ?
  { 
    ddots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
  } : 
  { 
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className='testimonials pt-60 pb-60'>
      <div className='section__header text-inherit wow fadeInUp delay-0-2s'>
        <h3 className='section__title first-color'>••• Что о нас говорят? •••</h3>
        <h2 className='section__subtitle'>Отзывы клиентов</h2>
      </div>
      <div className='testimonials__container wow fadeInUp delay-0-2s'>
        <div className='testimonials__button-container'>
          <button className="testimonials__button prev" onClick={this.previous}></button>
          <button className="testimonials__button next" onClick={this.next}></button>
        </div>
        <Slider {...settings} ref={(c) => (this.slider = c)} className='testimonials__slider'>
          <div>
            <div className='testimonial fadeInUp delay-0-2s'>
              <div className='testimonal__avatar avatar-1' />
              <div className='testimonial__container'>
                <p className='testimonial__review'>Хочу выразить большую благодарность команде студии! Заказ выполнили вовремя и ответили на запрос о внесении изменений в течение нескольких часов. Я рекомендую Creative Empire всем, кто ищет надежную студию веб-дизайна.</p>
                <div className='testimonial__author-description'>
                  <p className='testimonial__name'>Александра А.</p>
                  <p className='testimonial__designation'>Владелец кондитерской</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial fadeInUp delay-0-2s'>
              <div className='testimonal__avatar avatar-2' />
              <div className='testimonial__container'>
                <p className='testimonial__review'>Я очень доволен своим новым сайтом, благодаря ему мои подписчики стали активно записываться на курсы, которые я рекламирую в своем блоге)) Рекомендую CE всем! Буду обращаться за дизайном еще.</p>
                <div className='testimonial__author-description'>
                  <p className='testimonial__name'>Михаил И.</p>
                  <p className='testimonial__designation'>Блогер</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial fadeInUp delay-0-2s'>
              <div className='testimonal__avatar avatar-3' />
              <div className='testimonial__container'>
                <p className='testimonial__review'>Обговорили создание сайта, через несколько дней прислали на выбор 2 дизайна, понравились оба. Бонусом сделали шапку и превью для моего Ютуб канала. Буду рассказывать об Империи Креатива коллегам и парнтерам по бизнесу!</p>
                <div className='testimonial__author-description'>
                  <p className='testimonial__name'>Максим Евпатов</p>
                  <p className='testimonial__designation'>Фермер</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial fadeInUp delay-0-2s'>
              <div className='testimonal__avatar avatar-4' />
              <div className='testimonial__container'>
                <p className='testimonial__review'>Я очень требовательна к мелочам. Нужен был сложный сайт для развития хобби. Сделали в кратчайшие сроки, моментально вносили правки (мои прихоти, каюсь)))) Буду обращаться снова, когда будут нужны доработки.</p>
                <div className='testimonial__author-description'>
                  <p className='testimonial__name'>Наталья У.</p>
                  <p className='testimonial__designation'>Астролог</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
}