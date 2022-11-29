import React from 'react';
import { Link } from 'react-router-dom';
import iconDoubleRight from '../../assets/images/icons/double-right.png';

function PricePackages() {

  return (
    <section id="pricePackages" className='pricePackages'>

      <div className='section__header wow fadeInUp delay-0-2s'>
        <h3 className='section__title first-color'>••• Ценовая политика •••</h3>
        <h2 className='section__subtitle'>Премиальное качество по лучшей цене</h2>
      </div>

      <div className='pricePackages__container'>
        <div className='pricePackages__items'>
          <div className='pricePackages__item wow fadeInDown delay-0-2s'>
            <h2 className='pricePackages__header'>Одностраничный сайт</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Подходит для малого бизнеса</li>
                <li className='pricePackages__list-item'>Уникальный дизайн</li>
                <li className='pricePackages__list-item'>Точки захвата внимания</li>
                <li className='pricePackages__list-item'>Прием заявок</li>
                <li className='pricePackages__list-item'>Возможность онлайн-оплаты</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>25 000</span>
                <p>Скидка 25%</p>
                <Link className='pricePackages__link' to='/services/create-website' target='_blank'>Подробнее
                <img src={iconDoubleRight} alt='Создание сайтов под ключ — заказать разработку сайта под ключ онлайн в веб-студии креативного дизайна Creative Empire'/></Link>
              </div>
            </div>
          </div>
          <div className='pricePackages__item wow fadeInDown delay-0-2s'>
            <h2 className='pricePackages__header'>Интернет-магазин</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Отражение стиля компании</li>
                <li className='pricePackages__list-item'>Продажи любых товаров</li>
                <li className='pricePackages__list-item'>Премиальный дизайн</li>
                <li className='pricePackages__list-item'>Базовый E-commerce функционал</li>
                <li className='pricePackages__list-item'>Лучшие CMS и защита</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>55 000</span>
                <p>Скидка 25%</p>
                <Link className='pricePackages__link' to='/services/create-website' target='_blank'>Подробнее
                <img src={iconDoubleRight} alt='Создание сайтов под ключ — заказать разработку сайта под ключ онлайн в веб-студии креативного дизайна Creative Empire'/></Link>
              </div>
            </div>
          </div>
          <div className='pricePackages__item wow fadeInUp delay-0-4s'>
            <h2 className='pricePackages__header'>Корпоративный сайт</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Собственный бренд</li>
                <li className='pricePackages__list-item'>Улучшенное SEO</li>
                <li className='pricePackages__list-item'>Повышает авторитет компании</li>
                <li className='pricePackages__list-item'>Быстро продвигается</li>
                <li className='pricePackages__list-item'>Приносит хороший доход</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>100 000</span>
                <p>Скидка 25%</p>
                <Link className='pricePackages__link' to='/services/create-website' target='_blank'>Подробнее
                <img src={iconDoubleRight} alt='Создание сайтов под ключ — заказать разработку сайта под ключ онлайн в веб-студии креативного дизайна Creative Empire'/></Link>
              </div>
            </div>
          </div>
          <div className='pricePackages__item wow fadeInUp delay-0-4s'>
            <h2 className='pricePackages__header'>Портал</h2>
            <span className='pricePackages__badge'>Выбор пользователей</span>
            <div className='pricePackages__footer'>
              <ul className='pricePackages__list'>
                <li className='pricePackages__list-item'>Подходит для стартапов</li>
                <li className='pricePackages__list-item'>Собственная CMS</li>
                <li className='pricePackages__list-item'>Индвидуальный расчет</li>
                <li className='pricePackages__list-item'>Премиальный дизайн</li>
                <li className='pricePackages__list-item'>Наполнение контентом</li>
              </ul>
              <div className='pricePackages__price-area'>
                <span className='pricePackages__price'>220 000</span>
                <p>Скидка 25%</p>
                <Link className='pricePackages__link' to='/services/create-website' target='_blank'>Подробнее
                <img src={iconDoubleRight} alt='Создание сайтов под ключ — заказать разработку сайта под ключ онлайн в веб-студии креативного дизайна Creative Empire'/></Link>
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