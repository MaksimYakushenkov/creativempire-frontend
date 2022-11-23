import React from 'react';
import './Contact.css'
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Footer from '../Footer/Footer';
import iconDoubleRight from '../../assets/images/icons/double-right.png';

function Contact(props) {

  return (
    <>
    <Header stickyHeader={props.stickyHeader}/>
    <PageBanner
        header="Контакты"
    />
    <main className='contact pt-120 pb-120'>
      <div className='contact__container'>
        <div className='contact__description'>
          <div className='contact__header wow fadeInLeft delay-0-2s'>
            <h3 className='section__title first-color'>••• Давайте сотрудничать! •••</h3>
            <h2 className='section__subtitle'>Откройте для себя экстраординарный дизайн вместе с <a className='text-color-animation' href='./'>Creative Empire</a></h2>
            <p className='section__paragraph'>Начнем создавать для Вас лучший проект в ближайшее время — оставьте заявку онлайн.</p>
          </div>

          <form className='contact__form mt-60 wow fadeInUp delay-0-4s' noValidate>

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

        <div className='contact__info'>
          <div className='contact__list'>
            <div className='contact__list-item location wow fadeInUp delay-0-2s'>
              <div className='contact__icon'></div>
              <div className='contact__list__container'>
                <h3 className='contact__list-title'>Расположение</h3>
                <p>Москва, Россия. <br />Работаем по всей России.</p>
              </div>
            </div>

            <div className='contact__list-item mail wow fadeInUp delay-0-4s'>
              <div className='contact__icon'></div>
              <div className='contact__list__container'>
                <h3 className='contact__list-title'>Почта</h3>
                <a className='contact__list-link' href='mailto:order@creativempire.ru'>order@creativempire.ru</a>
              </div>
            </div>

            <div className='contact__list-item phone wow fadeInUp delay-0-6s'>
              <div className='contact__icon'></div>
              <div className='contact__list__container'>
                <h3 className='contact__list-title'>Мессенджеры</h3>
                <a href="https://t.me/creativempire" className="contact__list-link">Telegram</a>
                <a href="https://t.me/" className="contact__list-link">WhatsApp</a>
              </div>
            </div>

          </div>

          <div className='contact__social mt-60 wow fadeInUp delay-0-8s'>
            <h3 className='contact__social-header'>Подписывайтесь на нас</h3>
            <ul className='contact__social-list'>
              <li className='contact__social-list-item'><a className='' href="ya.ru"><i className='icon icon-vkontakte'></i></a></li>
              <li className='contact__social-list-item'><a className='' href="ya.ru"><i className='icon icon-telegram'></i></a></li>
            </ul>
          </div>
        </div>

      </div>
    </main>

    <PlaceMagic />
    <Footer />
    </>
  );
}

export default Contact;