import React from 'react';
import iconDoubleRight from '../../assets/images/icons/double-right.png';

function PricePackages() {

  return (
    <section className='pricePackages'>
      <div className='section__header'>
        <h3 className='section__title first-color'>••• Ценовая политика •••</h3>
        <h2 className='section__subtitle'>Премиальное качество по лучшей цене</h2>
      </div>
      <div className='pricePackages__container'>
        <div className='pricePackages__items'>
          <div className='pricePackages__item'>
            <h2 className='pricePackages__header'>Веб-сайт с нуля</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Разработка премиального дизайна</li>
                <li className='pricePackages__list-item'>Наполнение контентом</li>
                <li className='pricePackages__list-item'>Домен в подарок на год</li>
                <li className='pricePackages__list-item'>Бесплатный хостинг на год</li>
                <li className='pricePackages__list-item'>Онлайн поддержка 24/7</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>15 000</span>
                <p>Скидка 25%</p>
                <a className='pricePackages__link' href='ya.ru' target='_blank'>Подробнее
                <img src={iconDoubleRight} /></a>
              </div>
            </div>
          </div>
          <div className='pricePackages__item'>
            <h2 className='pricePackages__header'>Веб-сайт с нуля</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Разработка премиального дизайна</li>
                <li className='pricePackages__list-item'>Наполнение контентом</li>
                <li className='pricePackages__list-item'>Домен в подарок на год</li>
                <li className='pricePackages__list-item'>Бесплатный хостинг на год</li>
                <li className='pricePackages__list-item'>Онлайн поддержка 24/7</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>15 000</span>
                <p>Скидка 25%</p>
                <a className='pricePackages__link' href='ya.ru' target='_blank'>Подробнее
                <img src={iconDoubleRight} /></a>
              </div>
            </div>
          </div>
          <div className='pricePackages__item'>
            <h2 className='pricePackages__header'>Веб-сайт с нуля</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Разработка премиального дизайна</li>
                <li className='pricePackages__list-item'>Наполнение контентом</li>
                <li className='pricePackages__list-item'>Домен в подарок на год</li>
                <li className='pricePackages__list-item'>Бесплатный хостинг на год</li>
                <li className='pricePackages__list-item'>Онлайн поддержка 24/7</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>15 000</span>
                <p>Скидка 25%</p>
                <a className='pricePackages__link' href='ya.ru' target='_blank'>Подробнее
                <img src={iconDoubleRight} /></a>
              </div>
            </div>
          </div>
          <div className='pricePackages__item'>
            <h2 className='pricePackages__header'>Веб-сайт с нуля</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Разработка премиального дизайна</li>
                <li className='pricePackages__list-item'>Наполнение контентом</li>
                <li className='pricePackages__list-item'>Домен в подарок на год</li>
                <li className='pricePackages__list-item'>Бесплатный хостинг на год</li>
                <li className='pricePackages__list-item'>Онлайн поддержка 24/7</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>15 000</span>
                <p>Скидка 25%</p>
                <a className='pricePackages__link' href='ya.ru' target='_blank'>Подробнее
                <img src={iconDoubleRight} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section__shapes'>
        <div className='section__wave' />
      </div>
    </section>
  );
}

export default PricePackages;