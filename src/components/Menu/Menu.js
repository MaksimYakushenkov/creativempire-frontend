import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo-white.png';

function Menu(props) {
  return (
      <>
      {props.innerWidth < 768 &&
        <nav className='menu'>
          <ul className='menu__list'>
            <li className='menu__item menu__item_logo'><Link to='/'><img className='menu__logo' src={logo} alt='Логотип студии креативного дизайна «Creative Empire»'/></Link></li>
          </ul>
        </nav>
      }
      {props.innerWidth >= 768 &&
        <nav className='menu'>
          <ul className='menu__list'>
            {props.innerWidth > 1023 && <li className='menu__item'><Link to="/">Домой</Link></li>}
            <li className='menu__item'><Link to="/services">Услуги и цены</Link></li>
            <li className='menu__item'><Link to="/portfolio">Портфолио</Link></li>
            <li className='menu__item menu__item_logo'><Link to='/'><img className='menu__logo' src={logo} alt='Логотип студии креативного дизайна «Creative Empire»'/></Link></li>
            <li className='menu__item'><Link to="/work-plan">План работы</Link></li>
            <li className='menu__item'><Link to="/contact">Контакты</Link></li>
            {props.innerWidth > 1023 && <li className='menu__item'><Link to="/calculator">Калькулятор</Link></li>}
          </ul>
        </nav>

      }
      </>
  );
}

export default Menu;