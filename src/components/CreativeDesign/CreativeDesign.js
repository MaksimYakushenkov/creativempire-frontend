import React, { useEffect } from 'react';
import './CreativeDesign.css';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import LatestProjects from '../LatestProjects/LatestProjects';
import Cooperation from '../Cooperation/Cooperation';
import creativeDesign1 from '../../assets/images/services/creative-design/creative-design1.png';
import creativeDesign2 from '../../assets/images/services/creative-design/creative-design2.png';
import creativeDesign3 from '../../assets/images/services/creative-design/creative-design3.png';
import creativeDesign4 from '../../assets/images/services/creative-design/creative-design4.png';
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

function CreativeDesign(props) {

  return (
    <>
    <PageBanner breadcumps={props.breadcumps} header={props.header} />
    <main className={props.service}>
      <div className='detail__container'>
          <div className='detail__with-image'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Креативный дизайн под ключ в <Link className='text-color-animation' to='/'>Creative Empire</Link></h2>
              <div className='detail__description gap-10 mt-40 pl-40'>
                <p className='detail__paragraph check-mark-before'>Создаем только уникальный дизайн, внедряем все адаптивы, не используя шаблонов и конструкторов</p>
                <p className='detail__paragraph check-mark-before'>Для соцсетей, видеохостингов, сайтов</p>
                <p className='detail__paragraph check-mark-before'>Делаем разработку проектов любой сложности!</p>
              </div>
              <button className='service-details__button mt-30'>Заказать дизайн</button>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={creativeDesign1} alt="Креативный дизайн под ключ в Москве - заказать разработку под ключ в веб студии" />
            </div>

          </div>
      </div>
      <div className='detail__container'>
        <div className='detail__with-image fd-rr'>
          <div className='detail__info'>
            <h2 className='detail__title wow fadeInDown delay-0-2s'>Почему <span className='text-color-animation'>креативный дизайн</span> всем необходим?</h2>
            <div className='detail__description'>
              <p className='detail__paragraph mt-40 wow fadeInUp delay-0-4s'>Красивый баннер, шапка на YouTube, обложка ВКонтакте, превью радуют глаз — не так ли? А для владельцев ресурса <b>лучший креативный дизайн</b> незаменим, ведь цепляющая страничка в соцсети — это лицо компании.</p>
              <p className='detail__paragraph paragraph-left-border pl-10 mt-20  wow fadeInUp delay-0-6s'>Наш премиальный креативный дизайн пользуется популярностью у всех (блогеры, крупные компании, предприниматели), ведь позволяет повысить конверсии сайта, удержать внимание пользователя и увеличить обратную связь.</p>
            </div>
          </div>
          <div className='detail__image-container wow fadeInRight delay-0-4s'>
            <img className='detail__image' src={creativeDesign2} alt="Креативный дизайн под ключ в Москве - заказать разработку под ключ в веб студии" />
          </div>
          
        </div>
        <div className='detail__description description__dashed mb-60 wow fadeInUp delay-0-6s'>
          <p className='detail__paragraph'>Большинство наших креативных дизайн-проектов создаются в Adobe Photoshop, все исходники присылаем в формате <b>.psd</b>. По желанию нашего клиента мы также можем выполнить работу в любых других программных решениях.</p>
          <p className='detail__paragraph'>Для лучшего понимания друг друга желательно иметь техническое задание (ТЗ). Нет ТЗ? — ничего страшного! Можете <a href=''>скачать бриф</a> и заполнить его.</p>
        </div>
        
      </div>
      <div className='detail__container bg-2'>
          <div className='detail__full pt-40 pb-60'>
            <div className='detail__header-container'>
              <h2 className='detail__title wow fadeInDown delay-0-2s ta-c'>Если нужен <span className='text-color-animation'>креативный дизайн</span>, <br></br>то почему <Link to="/">Creative Empire?</Link></h2>
              <p className='detail__description detail__paragraph mt-30 wow fadeInUp delay-0-4s'>В нашей студии креативного дизайна работают не только дизайнеры, но еще и аналитики, которые способны проанализировать пользовательский опыт. Благодаря этому, мы предлагаем самое лучшее креативное решение на рынке в Москве и по всей России.</p>
            </div>
            <div className='detail__switch mt-60 wow fadeInUp delay-0-8s'>
              <div className='switch-container'>
                <div className='switch__header'>
                  <div className='switch__header-item switch__header-item_active' data-header={1} onClick={props.switchDesciption}>
                    <div className='switch__header_container'>
                      <img src={switchImage1} alt=''/>
                      <h3 className='subtitle-text-color'>Креативный дизайн под ключ с нуля</h3>
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
                      <p className='detail__paragraph'>Мы отличаемся от других веб-студий, где работают только «мастера на все руки». Наша команда может похвастаться обилием узконаправленных специалистов с многолетним опытом работы. Мы постоянно изучаем новые технологии, исследуем рынок и двигаемся в ногу со временем, а в некоторых случаях — даже опережаем его.<br></br><br></br>Благодаря этому, мы сами создаем с нуля любой креативный дизайн для соцсетей.</p>
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
                      <p className='detail__paragraph'>Когда ваш креативный дизайн будет готов, мы предоставим вам файл проекта выбранной на начальном этапе программы разработки (Adobe Photoshop и др.). Если у вас появятся какие либо вопросы, вам не нужно искать других специалистов — вы всегда можете обратиться к нам за помощью! Мы в кратчайшие сроки постараемся помочь решить проблему.</p>
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
              <h2 className='detail__title'>Какие услуги по созданию <span className='text-color-animation'>креативного дизайна</span> мы выполняем?</h2>
              <div className='detail__description mt-40'>
                <p className='detail__paragraph'>Мы предоставляем разнообразные услуги по разработке креативного дизайна во всех: <b>соцсетях, видеохостингах, сайтах</b>. Ориентируемся только на положительный опыт взаимодествия с пользователем.</p>
              </div>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={creativeDesign3} alt="Креативный дизайн под ключ в Москве - заказать разработку под ключ в веб студии Creative Empire" />
            </div>
          </div>
          <div className='detail__description'>
              <div className='detail__price-container'>
                <div className='sites__item wow fadeInLeft delay-0-4s'>
                  <div className='sites__header'>
                    <img src={iconWebsite} alt="Креативный дизайн под ключ в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Сайты</h3>
                  <ul className='sites__list'>
                    <li className='paragraph-grey-color lh-20'>Баннер</li>
                    <li className='paragraph-grey-color lh-20'>Превью товара</li>
                    <li className='paragraph-grey-color lh-20'>Рекламный баннер</li>
                    <li className='paragraph-grey-color lh-20'>Любой другой креатив для сайта</li>
                  </ul>
                </div>
                <div className='sites__item wow fadeInUp delay-0-6s'>
                  <div className='sites__header'>
                    <img src={iconUi} alt="Креативный дизайн под ключ в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Соцсети и видеохостинги</h3>
                  <ul className='sites__list'>
                    <li className='paragraph-grey-color lh-20'>Шапка группы ВКонтакте, Одноклассники</li>
                    <li className='paragraph-grey-color lh-20'>Баннеры для постов ВКонтакте, Одноклассники</li>
                    <li className='paragraph-grey-color lh-20'>Оформление групп ВКонтакте, Одноклассники</li>
                    <li className='paragraph-grey-color lh-20'>Шапка для канала YouTube</li>
                    <li className='paragraph-grey-color lh-20'>Оформление канала YouTube</li>
                    <li className='paragraph-grey-color lh-20'>Шапка для канала RuTube</li>
                    <li className='paragraph-grey-color lh-20'>Оформление канала RuTube</li>
                    <li className='paragraph-grey-color lh-20'>Превью для видео</li>

                  </ul>
                </div>
                <div className='sites__item wow fadeInUp delay-0-6s'>
                  <div className='sites__header'>
                    <img src={iconSiteApp} alt="Креативный дизайн под ключ в Москве - заказать разработку под ключ в веб студии Creative Empire"/>
                  </div>
                  <h3 className='sites__title mt-30 subtitle-text-color'>Маркетплейсы и другое</h3>
                  <ul className='sites__list'>
                    <li className='paragraph-grey-color lh-20'>Карточка товара Wildberries</li>
                    <li className='paragraph-grey-color lh-20'>Карточка товара Ozon</li>
                    <li className='paragraph-grey-color lh-20'>Карточка товара Яндекс.Маркет</li>
                    <li className='paragraph-grey-color lh-20'>Любой креатив</li>
                    <li className='paragraph-grey-color lh-20'>Любая соцсеть или видеохостинг</li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
      <div className='detail__container'>

          <div className='detail__with-image fd-rr'>
            <div className='detail__info wow fadeInLeft delay-0-2s'>
              <h2 className='detail__title'>Сколько стоит разработка <span className='text-color-animation'>креативного дизайна</span> в <Link to="/">Creative Empire</Link>?</h2>
              <div className='detail__description mt-40'>
                <p className='detail__paragraph'><b>Креативный дизайн</b> — это всегда <b>индивидуальный</b> проект, поэтому мы не беремся озвучивать точные суммы. Чтобы у вас было примерное понимание нашей ценовой политики, можно просчитать <b>примерную</b> стоимость проекта в <Link to='/calculator'>онлайн-калькуляторе</Link>.</p>
              </div>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={creativeDesign4} alt="Креативный дизайн под ключ в Москве - заказать разработку под ключ в веб студии" />
            </div>

          </div>
          <div className='detail__with-image'>
            <div className='price-list__container wow fadeInDown delay-0-2s'>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Баннер на сайт</h3>
                  <span className='price-list__price'>3500</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Превью товара</h3>
                  <span className='price-list__price'>3600</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Рекламный баннер на сайт</h3>
                  <span className='price-list__price'>3700</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Любой другой креатив для сайта</h3>
                  <span className='price-list__price'>5000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Шапка группы ВКонтакте</h3>
                  <span className='price-list__price'>3800</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Шапка группы Одноклассники</h3>
                  <span className='price-list__price'>3800</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Баннеры для постов ВКонтакте</h3>
                  <span className='price-list__price'>3000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Баннеры для постов Одноклассники</h3>
                  <span className='price-list__price'>3000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Шапка для канала YouTube</h3>
                  <span className='price-list__price'>3500</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Оформление группы ВКонтакте</h3>
                  <span className='price-list__price'>15000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Оформление группы Одноклассники</h3>
                  <span className='price-list__price'>15000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Оформление канала YouTube</h3>
                  <span className='price-list__price'>5000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Шапка для канала RuTube</h3>
                  <span className='price-list__price'>3500</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Оформление канала RuTube</h3>
                  <span className='price-list__price'>5000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Превью для видео</h3>
                  <span className='price-list__price'>3500</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Карточка товара Wildberries</h3>
                  <span className='price-list__price'>5000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Карточка товара Ozon</h3>
                  <span className='price-list__price'>5000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Карточка товара Яндекс.Маркет</h3>
                  <span className='price-list__price'>5000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Любой креатив</h3>
                  <span className='price-list__price'>3000</span>
                </div>
                <div className='price-list-item'>
                  <h3 className='price-list__title'>Любая соцсеть или видеохостинг</h3>
                  <span className='price-list__price'>2000</span>
                </div>
                
                
            </div>
          </div>
          {/* <table className='price-list__table'>
                <thead className='price-list__head'>
                  <tr>
                    <th colSpan={1}>Название услуги</th>
                    <th colSpan={1}>Стоимость, <b>от</b>, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Баннер</td>
                    <td>Баннер</td>
                  </tr>
                </tbody>

              </table> */}
      </div>
      <div id='lastProjects' className=''>
        <LatestProjects innerWidth={props.innerWidth} />
      </div>
      <Cooperation />
    </main>
    </>
  );
}

export default CreativeDesign;
