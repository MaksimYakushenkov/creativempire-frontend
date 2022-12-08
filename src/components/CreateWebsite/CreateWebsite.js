import React, { useEffect } from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import createWebsite1 from '../../assets/images/services/create-website1.png';
import createWebsite2 from '../../assets/images/services/create-website2.png';
import createWebsite3 from '../../assets/images/services/create-website3.png';
import iconWebsite from '../../assets/images/icons/website.png';
import iconUi from '../../assets/images/icons/ui.png';
import iconWordpress from '../../assets/images/icons/wordpress.png';
import switchImage1 from '../../assets/images/services/switchImage1.png';
import switchImage2 from '../../assets/images/services/switchImage2.png';
import switchImage3 from '../../assets/images/services/switchImage3.png';
import switchImage4 from '../../assets/images/services/switchImage4.png';
import LatestProjects from '../LatestProjects/LatestProjects';
import './CreateWebsite.css';
import Cooperation from '../Cooperation/Cooperation';

function CreateWebsite(props) {

  return (
    <>
    <PageBanner breadcumps={props.breadcumps} header={props.header} />
    <main className={props.service}>
      <div className='detail__container'>
          <div className='detail__with-image'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Создание сайтов под ключ в <a className='text-color-animation' href='./'>Creative Empire</a></h2>
              <div className='detail__description'>
                <p className='detail__paragraph check-mark-before'>Создаем сайты с уникальным дизайном, внедряем все адаптивы, не используя шаблонов и конструкторов</p>
                <p className='detail__paragraph check-mark-before'>SEO оптимизация уже включена в стоимость</p>
                <p className='detail__paragraph check-mark-before'>Делаем разработку проектов любой сложности!</p>
              </div>
              <Link to='/contact' className='service-details__button'>Заказать веб-сайт</Link>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={createWebsite1} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии" />
            </div>

          </div>
      </div>
      <div className='detail__container bg-2'>
          <div className='detail__full pt-40 pb-60'>
            <p className='detail__paragraph fw-b'>Для быстрой навигации по разделам нажмите на ссылку:</p>
            <nav className='detail__nav mt-20'>
              <ul>
                <li><a href="#forNeedWebsite">Для чего нужен вебсайт?</a></li>
                <li><a href="#whyweare">Почему мы?</a></li>
                <li><a href="#whichSites">Виды сайтов</a></li>
                <li><a href="#prices">Сколько стоит сделать сайт?</a></li>
                <li><a href="#lastProjects">Последние проекты</a></li>
              </ul>
            </nav>
          </div>
      </div>
      <div id='forNeedWebsite' className='detail__container'>
        <div className='detail__with-image fd-rr'>
          <div className='detail__info'>
            <h2 className='detail__title wow fadeInDown delay-0-2s'>Почему любой компании необходима <span className='text-color-animation'>разработка вебсайта?</span></h2>
            <div className='detail__description p-0__m'>
              <p className='detail__paragraph wow fadeInUp delay-0-4s'><b>Создание сайтов под ключ</b> – это одна из самых лучших услуг в веб-студии креативного дизайна <a href='./'>Creative Empire</a>. Вне зависимости от того, насколько масштабна ваша фирма, выход на онлайн-рынок позволит вам многократно увеличить свои показатели и расширить базу клиентов.</p>
              <p className='detail__paragraph paragraph-left-border pl-10 mt-20  wow fadeInUp delay-0-6s'>Благодаря хорошему и продающему сайту ваша компания может уверенно занять свои позиции в Интернете, получить узнаваемость и повысить доходность.</p>
            </div>
          </div>
          <div className='detail__image-container wow fadeInRight delay-0-4s'>
            <img className='detail__image' src={createWebsite3} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии" />
          </div>
          
        </div>
        <div className='detail__description description__dashed wow fadeInUp delay-0-6s'>
          <p className='detail__paragraph'>Многие с опаской относятся к онлайн-проектам, беспокоясь за то, что это может быть очень дорого. На самом деле, не обязательно сразу создавать что-то очень глобальное, типа многофункционального портала. В Интернет-проектах, как и в оффлайн-бизнесе, можно двигаться постепенно, шаг за шагом совершенствуя свое дело.</p>
          <p className='detail__paragraph'>Именно поэтому наша команда разработчиков готова проектировать как одностраничные сайты по бюджетной цене, так и многостраничные интернет-магазины и сайты услуг, в зависимости от пожеланий клиентов. Для того, чтобы определиться с тем, какой сайт нужен именно вам, вы можете оставить заявку или позвонить нам и мы вас с удовольствием проконсультируем.</p>
        </div>
        
      </div>
      <div id='whyweare' className='detail__container bg-2'>
          <div className='detail__full pt-40 pb-60'>
            <div className='detail__header-container'>
              <h2 className='detail__title wow fadeInDown delay-0-2s ta-c'>Если нужен <span className='text-color-animation'>вебсайт под ключ,</span> <br></br>то почему <Link to="/">Creative Empire?</Link></h2>
              <p className='detail__description detail__paragraph mt-30 wow fadeInUp delay-0-4s'>Благодаря тому, что в нашем агентстве работают не только специалисты по разработке сайтов , но еще и маркетологи, мы способны проанализировать рынок уже имеющихся в онлайне предложений по любой нише в москва или любом другом городе, а также внедрить на ваш сайт те необходимые элементы, которые приведут к высокой конверсии.</p>
            </div>
            <div className='detail__switch mt-60 wow fadeInUp delay-0-8s'>
              <div className='switch-container'>
                <div className='switch__header'>
                  <div className='switch__header-item switch__header-item_active' data-header={1} onClick={props.switchDesciption}>
                    <div className='switch__header_container'>
                      <img src={switchImage1} alt=''/>
                      <h3 className='subtitle-text-color'>Создание сайта с 0 «под ключ»</h3>
                    </div>
                  </div>
                  <div className='switch__header-item' data-header={2} onClick={props.switchDesciption}>
                    <div className='switch__header_container'>
                      <img src={switchImage2} alt=''/>
                      <h3 className='subtitle-text-color'>Премиальный дизайн</h3>
                    </div>
                  </div>
                  <div className='switch__header-item' data-header={3} onClick={props.switchDesciption}>
                    <div className='switch__header_container'>
                      <img src={switchImage3} alt=''/>
                      <h3 className='subtitle-text-color'>Реализация в несколько этапов</h3>
                    </div>
                  </div>
                  <div className='switch__header-item' data-header={4} onClick={props.switchDesciption}>
                    <div className='switch__header_container'>
                      <img src={switchImage4} alt=''/>
                      <h3 className='subtitle-text-color'>Пост-релизная поддержка</h3>
                    </div>
                  </div>


                </div>
                <div className='switch__description'>
                  <div className='switch__description-item switch__description-item_active' data-description={1}>
                    <div className='description__container'>
                      <h2 className=''>Профессионализм нашей команды</h2>
                      <p className='detail__paragraph'>В отличие от многих веб-студий, где присутствуют только отдельные специалисты, мы полностью выполняем разработку сайта под ключ. Начиная с этапа прототипировкии заканчивая публикацией сайта в Интернете. В нашем штате собраны все необходимые сотрудники: копирайтеры, дизайнеры, маркетологи и программисты.</p>

                    </div>
                  </div>
                  <div className='switch__description-item' data-description={2}>
                    <div className='description__container'>
                      <h2 className=''></h2>
                        <p className='detail__paragraph'>
                        
                        </p>
                    </div>
                  </div>
                  <div className='switch__description-item' data-description={3}>
                  <div className='description__container'>
                      <h2 className=''>Полный контроль и понимание</h2>
                      <p className='detail__paragraph'>Реализация сайта происходит в несколько этапов (прототипированиед, дизайн, верстка и помещение на хостинг и домен). В нашей совместной работе вы всегда будете осведомлены о том, на каком этапе сейчас ваш проект и в какие сроки этот этап будет реализован. Кроме того, мы всегда даем клиентам возможность внимательно ознакомиться с проделанной работой на каждом этапе и готовы к необходимым правкам без дополнительной оплаты. сторонних специалистов.</p>

                    </div>
                  </div>
                  <div className='switch__description-item' data-description={4}>
                  <div className='description__container'>
                      <h2 className=''>Индивидуальная помощь</h2>
                      <p className='detail__paragraph'>Когда сайт уже готов к использованию, мы всегда помогаем клиентам научиться пользоваться админ-панелью сайта. За вашим сайтом будет прикреплен ответственный сотрудник, к которому вы всегда сможете обратиться по любым вопросам технического характера. Сайт является «живым» инструментом и в ходе работы может возникнуть необходимость внести определенные изменения в различные разделы сайта. Вам не придется искать сторонних специалистов – мы всегда с радостью придем вам на помощь.</p>
                    </div>
                  </div>
                  
                  

                </div>

              </div>
            </div>
          </div>
      </div>
      <div id="whichSites" className='detail__container bg-2 pb-60'>
          <div className='detail__with-image'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Какие сайты <span className='text-color-animation'>мы разрабатываем</span>?</h2>
              <div className='detail__description'>
                <p className='detail__paragraph check-mark-before'>Основными нашими инструментами веб-разработки являются React и WordPress. Мы также отлично создаем сайты на HTML, поднимаем свой бэкенд и разворачиваем сервер.</p>
                <p className='detail__paragraph check-mark-before'>Категорически не используем готовые решения (конструкторы) ввиду обилия «грязного» кода, который замедляет работу сайта/приложения, и SEO-недружественности поисковых роботов.</p>
                <p className='detail__paragraph check-mark-before'>Работаем также и с другими фреймворками, готовы обсуждать проект и цену.</p>
              </div>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={createWebsite2} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии Creative Empire" />
            </div>
          </div>
          <div className='detail__description'>
              <div className='detail__price-container'>
                <div className='sites__item wow fadeInLeft delay-0-4s'>
                  <div className='sites__header'>
                    <img src={iconUi} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Сайты по видам</h3>
                  <ul className='sites__list'>
                    <li className='detail__list-paragraph'>Разработка одностраничного сайта (Landing Page)</li>
                    <li className='detail__list-paragraph'>Создание интернет-магазина</li>
                    <li className='detail__list-paragraph'>Разработка корпоративного сайта</li>
                    <li className='detail__list-paragraph'>Разработка портала</li>
                    <li className='detail__list-paragraph'>Создание сайта-визитки</li>
                    <li className='detail__list-paragraph'>Разработка сложных индивидуальных проектов</li>
                  </ul>
                </div>
                <div className='sites__item wow fadeInUp delay-0-6s'>
                  <div className='sites__header'>
                    <img src={iconWebsite} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Сайты по назначению</h3>
                  <ul className='sites__list'>
                    <li className='detail__list-paragraph'>Для физлиц</li>
                    <li className='detail__list-paragraph'>Для ИП и организаций</li>
                    <li className='detail__list-paragraph'>Для блогеров</li>
                    <li className='detail__list-paragraph'>Для самозанятых</li>
                  </ul>
                </div>
                <div className='sites__item wow fadeInRight delay-0-8s'>
                  <div className='sites__header'>
                    <img src={iconWordpress} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Сайты по виду CMS</h3>
                  <ul className='sites__list'>
                    <li className='detail__list-paragraph'>WordPress</li>
                    <li className='detail__list-paragraph'>1C: Bitrix</li>
                    <li className='detail__list-paragraph'>Drupal</li>
                    <li className='detail__list-paragraph'>Joomla</li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
      <div id='prices' className='detail__container'>

          <div className='detail__with-image fd-rr'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Сколько стоит разработка <span className='text-color-animation'>сайта под ключ</span> в Creative Empire?</h2>
              <div className='detail__description'>
                <p className='detail__paragraph'><b>Веб-сайт</b> — это всегда <b>индивидуальный</b> проект, поэтому мы не беремся озвучивать точные суммы. Чтобы у вас было примерное понимание нашей ценовой политики, можно просчитать <b>примерную</b> стоимость проекта в <Link to='/calculator'>онлайн-калькуляторе</Link>.</p>
              </div>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={createWebsite1} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии" />
            </div>

          </div>
          <div className='detail__decription'>
            <div className='pricePackages__container'>
              <div className='pricePackages__items'>
                <div className='pricePackages__item wow fadeInDown delay-0-2s'>
                  <h2 className='pricePackages__header'>Одностраничный сайт</h2>
                  <div className='pricePackages__footer'>
                    <ul className='pricePackages__list'>
                      <li className='pricePackages__list-item'>Подходит для малого бизнеса</li>
                      <li className='pricePackages__list-item'>Уникальный дизайн</li>
                      <li className='pricePackages__list-item'>Точки захвата внимания</li>
                      <li className='pricePackages__list-item'>Прием заявок</li>
                      <li className='pricePackages__list-item'>Возможность онлайн-оплаты</li>
                    </ul>
                    <div className='pricePackages__price-area mt-30'>
                      <span className='pricePackages__price'>20 000</span>
                    </div>
                  </div>
                </div>
                <div className='pricePackages__item wow fadeInDown delay-0-2s'>
                  <h2 className='pricePackages__header'>Интернет-магазин</h2>
                  <div className='pricePackages__footer'>
                    <ul className='pricePackages__list'>
                      <li className='pricePackages__list-item'>Отражение стиля компании</li>
                      <li className='pricePackages__list-item'>Продажи любых товаров</li>
                      <li className='pricePackages__list-item'>Премиальный дизайн</li>
                      <li className='pricePackages__list-item'>Базовый E-commerce функционал</li>
                      <li className='pricePackages__list-item'>Лучшие CMS и защита</li>
                    </ul>
                    <div className='pricePackages__price-area mt-30'>
                      <span className='pricePackages__price'>55 000</span>
                    </div>
                  </div>
                </div>
                <div className='pricePackages__item wow fadeInUp delay-0-4s'>
                  <h2 className='pricePackages__header'>Корпоративный сайт</h2>
                  <div className='pricePackages__footer'>
                    <ul className='pricePackages__list'>
                      <li className='pricePackages__list-item'>Собственный бренд</li>
                      <li className='pricePackages__list-item'>Улучшенное SEO</li>
                      <li className='pricePackages__list-item'>Повышает авторитет компании</li>
                      <li className='pricePackages__list-item'>Быстро продвигается</li>
                      <li className='pricePackages__list-item'>Приносит хороший доход</li>
                    </ul>
                    <div className='pricePackages__price-area mt-30'>
                      <span className='pricePackages__price'>150 000</span>
                    </div>
                  </div>
                </div>
                <div className='pricePackages__item wow fadeInUp delay-0-4s'>
                  <h2 className='pricePackages__header'>Индвидуальный проект</h2>
                  <div className='pricePackages__footer'>
                    <ul className='pricePackages__list'>
                      <li className='pricePackages__list-item'>Подходит для стартапов</li>
                      <li className='pricePackages__list-item'>Собственная CMS</li>
                      <li className='pricePackages__list-item'>Индвидуальный расчет</li>
                      <li className='pricePackages__list-item'>Премиальный дизайн</li>
                      <li className='pricePackages__list-item'>Наполнение контентом</li>
                    </ul>
                    <div className='pricePackages__price-area mt-30'>
                      <span className='pricePackages__price'>250 000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div id='lastProjects' className=''>
        <LatestProjects innerWidth={props.innerWidth} />
      </div>
      <Cooperation />
    </main>
    </>
  );
}

export default CreateWebsite;
