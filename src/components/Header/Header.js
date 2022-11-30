import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import contactMail from '../../assets/images/icons/contact-mail.png';

function Header(props) {
  
  return (
      <>
      {props.innerWidth <= 767 &&
        <>
        <header className={`header ${props.stickyHeader ? 'header__sticky' : ''}`}>
          <div className='header__container'>
            <Menu innerWidth={props.innerWidth} />
          </div>
        </header>
        <ul className='menu__mobile-list'>
          <li className='menu__mobile-item mobile-services'><Link to='/services'>Услуги</Link></li>
          <li className='menu__mobile-item mobile-portfolio'><Link to='/portfolio'>Портфолио</Link></li>
          <button className='mobile__order-button'></button>
          <li className='menu__mobile-item mobile-calculator'><Link to='/calculator'>Калькулятор</Link></li>
          <li className='menu__mobile-item mobile-contacts'><Link to='/contact'>Контакты</Link></li>
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