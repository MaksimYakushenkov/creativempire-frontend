import React, { useEffect } from 'react';
import './UxUiDesign.css';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import LatestProjects from '../LatestProjects/LatestProjects';
import Cooperation from '../Cooperation/Cooperation';
import uxui1 from '../../assets/images/services/uxui/uxui1.png';
import uxui2 from '../../assets/images/services/uxui/uxui2.png';
import createWebsite2 from '../../assets/images/services/create-website2.png';
import createWebsite3 from '../../assets/images/services/create-website3.png';
import iconWebsite from '../../assets/images/icons/website.png';
import iconUi from '../../assets/images/icons/ui.png';
import iconWordpress from '../../assets/images/icons/wordpress.png';
import switchImage1 from '../../assets/images/services/switchImage1.png';
import switchImage2 from '../../assets/images/services/switchImage2.png';
import switchImage3 from '../../assets/images/services/switchImage3.png';
import switchImage4 from '../../assets/images/services/switchImage4.png';
import iconSiteApp from '../../assets/images/icons/site-app.png';


function UxUiDesign(props) {

  return (
    <>
    <PageBanner breadcumps={props.breadcumps} header={props.header} />
    <main className={props.service}>
      <div className='detail__container'>
          <div className='detail__with-image'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Разработка UX/UI-дизайна под ключ в <a className='text-color-animation' href='./'>Creative Empire</a></h2>
              <div className='detail__description gap-10 mt-40 pl-40'>
                <p className='detail__paragraph check-mark-before'>Создаем только уникальный дизайн, внедряем все адаптивы, не используя шаблонов и конструкторов</p>
                <p className='detail__paragraph check-mark-before'>Для сайтов и приложений</p>
                <p className='detail__paragraph check-mark-before'>Делаем разработку проектов любой сложности!</p>
              </div>
              <button className='service-details__button mt-30'>Заказать UX/UI-дизайн</button>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={uxui1} alt="Разработка UX/UI-дизайна в Москве - заказать разработку под ключ в веб студии" />
            </div>

          </div>
      </div>
      <div className='detail__container'>
        <div className='detail__with-image fd-rr'>
          <div className='detail__info'>
            <h2 className='detail__title wow fadeInDown delay-0-2s'>Что такое <span className='text-color-animation'>UX/UI дизайн</span>?</h2>
            <div className='detail__description'>
              <p className='detail__paragraph mt-40 wow fadeInUp delay-0-4s'>Выражаясь простыми словами, UX/UI-дизайн — это то, что видит пользователь при использовании какого-либо ресурса, например сайта или приложения.</p>
              <p className='detail__paragraph paragraph-left-border pl-10 mt-20  wow fadeInUp delay-0-6s'>Грамотно созданный дизайн пользовательского интерфейса позволяет повысить конверсии сайта, удержать внимание пользователя в приложении и увеличить обратную связь.</p>
            </div>
          </div>
          <div className='detail__image-container wow fadeInRight delay-0-4s'>
            <img className='detail__image' src={createWebsite3} alt="Разработка UX/UI-дизайна в Москве - заказать разработку под ключ в веб студии" />
          </div>
          
        </div>
        <div className='detail__description description__dashed mb-60 wow fadeInUp delay-0-6s'>
          <p className='detail__paragraph'>Большинство наших UX/UI-проектов создаются в Figma и Adobe Photoshop. По желанию нашего клиента мы также можем сверстать дизайн в Adobe XD, Sketch и Axure.</p>
          <p className='detail__paragraph'>В рамках нашей работы в области веб-аналитики , которая заключается в поддержке проектирования с учетом потребностей пользователей, мы используем системы Google Analytics, Google Tag Manager и Google Optimize.</p>
        </div>
        
      </div>
      <div className='detail__container bg-2'>
          <div className='detail__full pt-40 pb-60'>
            <div className='detail__header-container'>
              <h2 className='detail__title wow fadeInDown delay-0-2s ta-c'>Если нужен <span className='text-color-animation'>UX/UI-дизайн</span>, <br></br>то почему <Link to="/">Creative Empire?</Link></h2>
              <p className='detail__description detail__paragraph mt-30 wow fadeInUp delay-0-4s'>В нашей веб-студии дизайна работают не только UX/UI-дизайнеры, но еще и веб-аналитики, которые способны проанализировать пользовательский опыт. Благодаря этому, мы предлагаем самое лучшее креативное решение на рынке в Москве и по всей России.</p>
            </div>
            <div className='detail__switch mt-60 wow fadeInUp delay-0-8s'>
              <div className='switch-container'>
                <div className='switch__header'>
                  <div className='switch__header-item switch__header-item_active' data-header={1} onClick={props.switchDesciption}>
                    <div className='switch__header_container'>
                      <img src={switchImage1} alt=''/>
                      <h3 className='subtitle-text-color'>Разработка UX/UI-дизайна с нуля</h3>
                    </div>
                  </div>
                  <div className='switch__header-item' data-header={2} onClick={props.switchDesciption}>
                    <div className='switch__header_container'>
                      <img src={switchImage2} alt=''/>
                      <h3 className='subtitle-text-color'>Только премиальный дизайн</h3>
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
                      <h2 className='mb-30'>В нашей команде — только профессионалы</h2>
                      <p className='detail__paragraph'>Мы отличаемся от других веб-студий, где работают только «мастера на все руки». Наша команда может похвастаться обилием узконаправленных специалистов с многолетним опытом работы. Мы постоянно изучаем новые технологии, исследуем рынок и двигаемся в ногу со временем, а в некоторых случаях — даже опережаем его.<br></br><br></br>Благодаря этому, мы сами создаем с нуля любой UX/UI-дизайн сайта или приложения под ключ.</p>
                    </div>
                  </div>
                  <div className='switch__description-item' data-description={2}>
                    <div className='description__container'>
                      <h2 className='mb-30'>Лушчим клиентам — лучший дизайн!</h2>
                        <p className='detail__paragraph'>
                          Мы ежемесячно проводим аналитику современных трендов в дизайне. На основании полученных данных мы разрабатываем новую концепцию и внедряем ее уже в следующих проектах. Поэтому можем гарантировать самое высокое качество наших продуктов.
                        </p>
                    </div>
                  </div>
                  <div className='switch__description-item' data-description={3}>
                  <div className='description__container'>
                      <h2 className='mb-30'>Полный контроль и ведение</h2>
                      <p className='detail__paragraph'>Разработка дизайна происходит в несколько этапов (обзор конкурентов, прототипование, создание дизайна, внесение правок). После подтверждения заказа вы всегда будете знать о том, на каком этапе разработки находится ваш проект, в какие сроки этот этам будет реализован. Помимо этого, вы всегда сможете тщательно ознакомиться с проделанной работой. Мы готовы сделать некритичные правки без дополнительной оплаты.</p>

                    </div>
                  </div>
                  <div className='switch__description-item' data-description={4}>
                  <div className='description__container'>
                      <h2 className='mb-30'>Индивидуальная помощь</h2>
                      <p className='detail__paragraph'>Когда ваш UX/UI-дизайн будет готов, мы предоставим вам файл проекта выбранной на начальном этапе программы разработки (Figma, Adobe Photoshop, Adobe XD, Sketch и Axure). Если у вас появятся какие либо вопросы, вам не нужно искать других специалистов — вы всегда можете обратиться к нам за помощью! Мы в кратчайшие сроки постараемся помочь решить проблему.</p>
                    </div>
                  </div>
                  
                  

                </div>

              </div>
            </div>
          </div>
      </div>
      <div id='whichSites' className='detail__container bg-2 pb-60'>
          <div className='detail__with-image'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Какой UX/UI <span className='text-color-animation'>мы разрабатываем</span>?</h2>
              <div className='detail__description mt-40'>
                <p className='detail__paragraph'>Мы предоставляем услуги по дизайну макетов (UX-дизайн) и графическому дизайну (UI-дизайн) на основе методологий дизайн-мышления и дизайна, ориентированного на пользователя.</p>
              </div>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={createWebsite2} alt="Разработка UX/UI-дизайна в Москве - заказать разработку под ключ в веб студии Creative Empire" />
            </div>
          </div>
          <div className='detail__description'>
              <div className='detail__price-container'>
                <div className='sites__item wow fadeInLeft delay-0-4s'>
                  <div className='sites__header'>
                    <img src={iconWebsite} alt="Разработка UX/UI-дизайна в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Сайты</h3>
                  <ul className='sites__list'>
                    <li className='paragraph-grey-color lh-20'>Одностраничного сайта (Landing Page)</li>
                    <li className='paragraph-grey-color lh-20'>Интернет-магазина</li>
                    <li className='paragraph-grey-color lh-20'>Корпоративного сайта</li>
                    <li className='paragraph-grey-color lh-20'>Портала</li>
                    <li className='paragraph-grey-color lh-20'>Сайта-визитки</li>
                    <li className='paragraph-grey-color lh-20'>Сложных индивидуальных проектов</li>
                  </ul>
                </div>
                <div className='sites__item wow fadeInUp delay-0-6s'>
                  <div className='sites__header'>
                    <img src={iconUi} alt="Разработка UX/UI-дизайна в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Мобильные приложения</h3>
                  <ul className='sites__list'>
                    <li className='paragraph-grey-color lh-20'>Для iOS</li>
                    <li className='paragraph-grey-color lh-20'>Для Android</li>
                    <li className='paragraph-grey-color lh-20'>PWA</li>
                  </ul>
                </div>
                <div className='sites__item wow fadeInUp delay-0-6s'>
                  <div className='sites__header'>
                    <img src={iconSiteApp} alt="Разработка UX/UI-дизайна в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Сайт и приложение</h3>
                  <ul className='sites__list'>
                    <li className='paragraph-grey-color lh-20'>Единый стиль</li>
                    <li className='paragraph-grey-color lh-20'>Вместе - дешевле</li>
                    <li className='paragraph-grey-color lh-20'>Подходит любому бизнесу</li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
      <div className='detail__container'>

          <div className='detail__with-image fd-rr'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Сколько стоит разработка <span className='text-color-animation'>UX/UI-дизайна</span> в Creative Empire?</h2>
              <div className='detail__description mt-40'>
                <p className='detail__paragraph'><b>UX/UI-дизайн</b> — это всегда <b>индивидуальный</b> проект, поэтому мы не беремся озвучивать точные суммы. Чтобы у вас было примерное понимание нашей ценовой политики, можно просчитать <b>примерную</b> стоимость проекта в <Link to='/calculator'>онлайн-калькуляторе</Link>.</p>
              </div>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={uxui2} alt="Разработка UX/UI-дизайна в Москве - заказать разработку под ключ в веб студии" />
            </div>

          </div>
          <div className='detail__decription'>
            <div className='pricePackages__container'>
              <div className='pricePackages__items'>
                <div className='pricePackages__item wow fadeInDown delay-0-2s'>
                  <h2 className='pricePackages__header'>UX/UI-дизайн сайта</h2>
                  <div className='pricePackages__footer'>
                    <ul className='pricePackages__list'>
                      <li className='pricePackages__list-item'>Мобильная версия включена</li>
                      <li className='pricePackages__list-item'>Подходит для любого бизнеса</li>
                      <li className='pricePackages__list-item'>Уникальный дизайн</li>
                      <li className='pricePackages__list-item'>Точки захвата внимания</li>
                      <li className='pricePackages__list-item'>Бесплатные правки (до 10)</li>
                    </ul>
                    <div className='pricePackages__price-area mt-30'>
                      <span className='pricePackages__price'>15 000</span>
                    </div>
                  </div>
                </div>
                <div className='pricePackages__item wow fadeInDown delay-0-2s'>
                  <h2 className='pricePackages__header'>UX/UI-дизайн приложения</h2>
                  <div className='pricePackages__footer'>
                    <ul className='pricePackages__list'>
                      <li className='pricePackages__list-item'>Подходит для любого бизнеса</li>
                      <li className='pricePackages__list-item'>Уникальный дизайн</li>
                      <li className='pricePackages__list-item'>Точки захвата внимания</li>
                      <li className='pricePackages__list-item'>Бесплатные правки (до 10)</li>
                    </ul>
                    <div className='pricePackages__price-area mt-30'>
                      <span className='pricePackages__price'>20 000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div id='lastProjects' className=''>
        <LatestProjects />
      </div>
      <Cooperation />
    </main>
    </>
  );
}

export default UxUiDesign;
