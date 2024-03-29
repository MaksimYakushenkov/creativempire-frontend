import React, { useRef } from 'react';
import publicKey from '../../utils/emailJS/emailJS-config';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Footer from '../Footer/Footer';
import iconDoubleRight from '../../assets/images/icons/double-right.png';
import iconLoading from '../../assets/images/icons/loading.png';
import validation from '../Validation/Validation';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function Contact(props) {
  const form = useRef();
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [product, setProduct] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [productVaild, setProductVaild] = React.useState(false);
  const [nameVaild, setNameVaild] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [descriptionVaild, setDescriptionVaild] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  
  function sendEmail(e) {
    e.preventDefault();
    props.setIsProcessing(true);
    emailjs.sendForm('creativempire', e.currentTarget.dataset.templateId, form.current, publicKey)
    .then((result) => {
        props.setIsProcessing(false);
        props.setInfoData({
          img: "ok",
          text: "Сообщение отправлено! Ждите скорого ответа",
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

  return (
    <>
    <HelmetProvider><Helmet>
      <title>{`Все способы связи | Creative Empire — премиальная веб-студия креативного дизайна`}</title>
      <meta name="description" content="Вы можете связаться с нами по нескольким каналам связи. Напишите нам в соцсети, или отправьте заявку онлайн, чтобы узнать сколько стоит: разработка сайта под ключ, создание UX/UI-дизайна, креативный дизайн и др. Creative Empire — премиальная веб-студия креативного дизайна." />

      <meta property="og:title" content="Все способы связи | Creative Empire — премиальная веб-студия креативного дизайна" />
      <meta property="og:site_name" content="creativempire.ru" />
      <meta property="og:url" content="https://creativempire.ru/contact" />
      <meta property="og:description" content="Вы можете связаться с нами по нескольким каналам связи. Напишите нам в соцсети, или отправьте заявку онлайн, чтобы узнать сколько стоит: разработка сайта под ключ, создание UX/UI-дизайна, креативный дизайн и др. Creative Empire — премиальная веб-студия креативного дизайна." />
    </Helmet></HelmetProvider>
    <Header
    innerWidth={props.innerWidth}
    stickyHeader={props.stickyHeader}
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupWithFormOpened={props.isPopupWithFormOpened}
    setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
    <PageBanner
        header="Контакты"
    />
    <main className='contact'>
      <div className='contact__container'>
        <div className='contact__description'>
          <div className='contact__header wow fadeInLeft delay-0-2s'>
            <h3 className='section__title first-color'>••• Давайте сотрудничать! •••</h3>
            <h2 className='section__subtitle'>Откройте для себя экстраординарный дизайн вместе с <a className='text-color-animation' href='./'>Creative Empire</a></h2>
            <p className='section__paragraph'>Начнем создавать для Вас лучший проект в ближайшее время — оставьте заявку онлайн.</p>
          </div>

          <form ref={form} onSubmit={sendEmail} id='contact-form' className='contact__form wow fadeInUp delay-0-4s' data-template-id='order_online' noValidate>

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

            <div className='accept-rules'>
              <p className='accept-rules__paragraph'>Нажимая на кнопку вы даете согласие на обработку персональных данных и соглашаетесь с <Link to="/privacy-policy" target="_blank">политикой конфиденциальности</Link>.</p>
            </div>
            <button type="submit" className='contactUs__submit-button pricePackages__link' disabled={!formValid}>{props.isProcessing ? <><img className='submit__loading' src={iconLoading} alt='Иконка загрузки' /></> : <>Отправить<img src={iconDoubleRight} alt='Иконка стрелка вправо'/></>}</button>
            
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
                {/* <a href="https://t.me/" className="contact__list-link">WhatsApp</a> */}
              </div>
            </div>

          </div>

          <div className='contact__social wow fadeInUp delay-0-8s'>
            <h3 className='contact__social-header'>Подписывайтесь на нас</h3>
            <ul className='contact__social-list'>
              <li className='contact__social-list-item'>
                <a className='' href="https://vk.com/creativempire_studio" target="_blank" rel="noreferrer"><i className='icon icon-vkontakte'></i></a>
              </li>
              <li className='contact__social-list-item'>
                <a className='' href="https://t.me/creativempire" target="_blank" rel="noreferrer"><i className='icon icon-telegram'></i></a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>

    <PlaceMagic />
    <Footer
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupOpened={props.isPopupOpened}
    setIsPopupOpened={props.setIsPopupOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
    </>
  );
}

export default Contact;