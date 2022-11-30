import React from 'react';
import Menu from '../Menu/Menu';
import contactMail from '../../assets/images/icons/contact-mail.png';
import menuMobileServices from '../../assets/images/icons/menu__mobile_services.png';

function Header(props) {
  
  return (
      <>
      {props.innerWidth <= 767 &&
        <>
        <header className={`header ${props.stickyHeader ? 'header__sticky' : ''}`}>
          <div className='header__container'>
            <Menu innerWidth={props.innerWidth} />
            <button className={`order__button ${props.innerWidth <= 1023 && props.innerWidth > 767 && 'order__button_small'}`}>
              {props.innerWidth > 1023 && <><span className="contact-form__span"></span><span className="contact-form__span"></span><span className="contact-form__span"></span><span className="contact-form__span"></span></>}
              {props.innerWidth <= 1023 && props.innerWidth > 767 &&
                <img className='order__button-image' src={contactMail} alt='Заказать вебсайт онлайн' />}
              {props.innerWidth > 1023 && 'Заказать звонок'}
            </button>
          </div>
        </header>
        <ul className='menu__mobile-list'>
          <li className='menu__mobile-item'>Услуги</li>
          <li className='menu__mobile-item'>Портфолио</li>
          <button className='mobile__order-button'></button>
          <li className='menu__mobile-item'>Калькулятор</li>
          <li className='menu__mobile-item'>Контакты</li>
        </ul>
        </>
      }
      {
        props.innerWidth > 767 && 
        <header className={`header ${props.stickyHeader ? 'header__sticky' : ''}`}>
          <div className='header__container'>
            <Menu innerWidth={props.innerWidth}/>
            <button className={`order__button ${ props.innerWidth <= 1023 && props.innerWidth > 767 && 'order__button_small'}`}>
              {props.innerWidth > 1023 && <><span className="contact-form__span"></span><span className="contact-form__span"></span><span className="contact-form__span"></span><span className="contact-form__span"></span></>}
              { props.innerWidth <= 1023 && props.innerWidth > 767 && 
                <img className='order__button-image' src={contactMail} alt='Заказать вебсайт онлайн' />
              }
              { props.innerWidth > 1023 && 'Заказать звонок'}
            </button>
          </div>
        </header> 
      }
      </>
  );
}

export default Header;