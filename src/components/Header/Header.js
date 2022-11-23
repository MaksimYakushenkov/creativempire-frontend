import React from 'react';
import Menu from '../Menu/Menu';

function Header(props) {
  
  return (
    <header className={`header ${props.stickyHeader ? 'header__sticky' : ''}`}>
      <div className='header__container'>
        <Menu />
        <button className="order__button">
          <span className="contact-form__span"></span>
          <span className="contact-form__span"></span>
          <span className="contact-form__span"></span>
          <span className="contact-form__span"></span>
          Заказать звонок
        </button>
      </div>
    </header> 
  );
}

export default Header;