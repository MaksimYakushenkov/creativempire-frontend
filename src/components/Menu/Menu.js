import React from 'react';
import logo from '../../assets/images/logos/logo-white.png';

function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'>Домой</li>
        <li className='menu__item'>Услуги</li>
        <li className='menu__item'>Прайс-лист</li>
        <li className='menu__item menu__item_logo'><img className='menu__logo' src={logo} alt='Логотип студии креативного дизайна «Creative Empire»'/></li>
        <li className='menu__item'>Портфолио</li>
        <li className='menu__item'>О нас</li>
        <li className='menu__item'>Контакты</li>
      </ul>
    </nav>
  );
}

export default Menu;
