import React from 'react';
import { Link } from 'react-router-dom';
import serviceWeb from '../../assets/images/services/web_develope_creative_empire.webp';
import serviceUXUI from '../../assets/images/services/ux_ui_design_creative_empire.webp';
import serviceBanners from '../../assets/images/services/design_creative_empire.webp';
import serviceBrand from '../../assets/images/services/branding_creative_empire.webp';
import serviceLogo from '../../assets/images/services/logo_creative_empire.webp';
import serviceCreativeDesign from '../../assets/images/services/creative_design_creative_empire.webp';

function Services(props) {

  return (
    <section className='services pt-60 pb-100'>
      <div className='services__container'>
        <div className='latestProjects__header wow fadeInUp delay-0-2s'>
          <h3 className='section__title first-color'>••• Что мы умеем? •••</h3>
          <h2 className='section__subtitle'>Полный перечень наших услуг</h2>
        </div>
        
        <div className='services__grid mt-120'>

          <div className='services__item wow fadeInLeft delay-0-2s'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceWeb} alt='Создание сайтов под ключ в Москве и по всей России' />
            </div>
            <div className='services__description'>
              <h2 className='services__title mb-30'>Создание сайтов под ключ</h2>
              <ul className='services__list'>
                <li className='services__list-item'>Премиальный дизайн</li>
                <li className='services__list-item'>SEO оптимизация</li>
                <li className='services__list-item'>Домен в подарок на год</li>
                <li className='services__list-item'>Бесплатный хостинг на год</li>
                <li className='services__list-item'>Онлайн поддержка 24/7</li>
              </ul>
              <div className='services__price-area'>
                <span className='services__price'>20 000</span>
                <Link className='services__button' to="/services/create-website">Узнать подробнее</Link>
            </div>
            </div>
            
          </div>

          <div className='services__item wow fadeInRight delay-0-2s'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceUXUI} alt='Разработка UX/UI дизайна под ключ заказать онлайн в Москве и по всей России' />
            </div>
            <div className='services__description'>
              <h2 className='services__title mb-30'>Разработка UX/UI дизайна</h2>
              <ul className='services__list'>
                <li className='services__list-item'>Веб-сайт и мобильные приложения</li>
                <li className='services__list-item'>Только цепляющий дизайн</li>
                <li className='services__list-item'>Работаем в Adobe XD и Figma</li>
                <li className='services__list-item'>Мобильная версия включена</li>
                <li className='services__list-item'>Можно вносить правки</li>
              </ul>
              <div className='services__price-area'>
                <span className='services__price'>15 000</span>
                <Link className='services__button' to="/services/ux-ui-design">Узнать подробнее</Link>
              </div>
            </div>
          </div>

          <div className='services__item wow fadeInLeft delay-0-4s'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceCreativeDesign} alt='Креативный дизайн недорого заказать онлайн' />
            </div>
            <div className='services__description'>
              <h2 className='services__title mb-30'>Креативный дизайн</h2>
              <ul className='services__list'>
                <li className='services__list-item'>Можно заказать почти что угодно</li>
                <li className='services__list-item'>Обсуждаем тонкости</li>
                <li className='services__list-item'>Присылаем исходники</li>
                <li className='services__list-item'>Работаем с видео</li>
                <li className='services__list-item'>Набор шрифтов бесплатно</li>
              </ul>
              <div className='services__price-area'>
              <span className='services__price'> 2 500</span>
              <a className='services__button' href="./">Узнать подробнее</a>
              </div>
            </div>
          </div>

          <div className='services__item wow fadeInRight delay-0-4s'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceBanners} alt='Рекламные баннеры недорого заказать онлайн' />
            </div>
            <div className='services__description'>
              <h2 className='services__title mb-30'>Рекламные баннеры</h2>
              <ul className='services__list'>
                <li className='services__list-item'>Изучаем конкурентов ниши</li>
                <li className='services__list-item'>Делаем продающий креатив</li>
                <li className='services__list-item'>Два дизайна на выбор</li>
                <li className='services__list-item'>Присылаем исходники</li>
                <li className='services__list-item'>Набор шрифтов бесплатно</li>
              </ul>
              <div className='services__price-area'>
              <span className='services__price'> 3 000</span>
              <a className='services__button' href="./">Узнать подробнее</a>
            </div>
            </div>
          </div>

          <div className='services__item wow fadeInLeft delay-0-6s'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceBrand} alt='Разработка бренда под ключ заказать онлайн в Москве и по всей России' />
            </div>
            <div className='services__description'>
              <h2 className='services__title mb-30'>Создание собственного бренда</h2>
              <ul className='services__list'>
                <li className='services__list-item'>Продумаем каждую мелочь</li>
                <li className='services__list-item'>Дружим со всеми соцсетями</li>
                <li className='services__list-item'>Создаем конкурентные сообщества</li>
                <li className='services__list-item'>Креативный дизайн в подарок</li>
                <li className='services__list-item'>Присылаем исходники</li>
              </ul>
              <div className='services__price-area'>
              <span className='services__price'>20 000</span>
              <a className='services__button' href="./">Узнать подробнее</a>
              </div>
            </div>
          </div>

          <div className='services__item wow fadeInRight delay-0-6s'>
            <div className='services__image-container'>
              <img className='services__image' src={serviceLogo} alt='Разработка логотипа под ключ онлайн заказать в Москве и по всей России' />
            </div>
            <div className='services__description'>
              <h2 className='services__title mb-30'>Разработка логотипа</h2>
              <ul className='services__list'>
                <li className='services__list-item'>Геймерский логотип</li>
                <li className='services__list-item'>Винтажный логотип</li>
                <li className='services__list-item'>Классический логотип</li>
                <li className='services__list-item'>Можно вносить правки</li>
                <li className='services__list-item'>Присылаем исходники</li>
              </ul>
              <div className='services__price-area'>
              <span className='services__price'>4 000</span>
              <a className='services__button' href="./">Узнать подробнее</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;