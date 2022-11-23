import React from 'react';
import logo from '../../assets/images/logos/logo-white.png';

function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'><a href="./">Домой</a></li>
        <li className='menu__item'><a href="./services">Услуги и цены</a></li>
        <li className='menu__item'><a href="./portfolio">Портфолио</a></li>
        <li className='menu__item menu__item_logo'><img className='menu__logo' src={logo} alt='Логотип студии креативного дизайна «Creative Empire»'/></li>
        <li className='menu__item'><a href="./work-plan">План работы</a></li>
        <li className='menu__item'><a href="./contact">Контакты</a></li>
        <li className='menu__item'><a href="./calculator">Калькулятор</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
