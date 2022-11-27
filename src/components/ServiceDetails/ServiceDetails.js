import React from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Footer from '../Footer/Footer';
import './ServiceDetails.css';
import createWebsite1 from '../../assets/images/services/create-website1.png';
import createWebsite2 from '../../assets/images/services/create-website2.png';
import createWebsite3 from '../../assets/images/services/create-website3.png';
import iconUserExperience from '../../assets/images/icons/user-experience.webp';
import iconWebPage from '../../assets/images/icons/web-page.webp';
import iconSeo from '../../assets/images/icons/seo.webp';
import iconShopping from '../../assets/images/icons/shopping.webp';
import switchImage1 from '../../assets/images/services/switchImage1.png';

function ServiceDetails(props) {
  const params = useParams();
  const [switchFirstActive, setSwitchFirstActive] = React.useState(true);
  const [switchSecondActive, setSwitchSecondActive] = React.useState(false);
  const [switchThirdActive, setSwitchThirdActive] = React.useState(false);
  const [switchFourthActive, setSwitchFourthActive] = React.useState(false);

  const switchDescriptionList = Array.from(document.querySelectorAll('.switch__description-item'));

  function switchDesciption(e) {
    switchDescriptionList.map((description) => {
      if(description.dataset.description === e.currentTarget.dataset.header) {
        description.classList.add('switch__description-item_active');
    } else {
      description.classList.remove('switch__description-item_active');
    }
  })
  }

  return (
    <>
    <Header stickyHeader={props.stickyHeader} />
    <PageBanner
        header="Разработка веб-сайтов"
        breadcump={{
          'link':'services',
          'linkTitle': 'Услуги'
        }}
    />
    <main className={params.service}>

      {
        params.service === 'create-website' &&
        <>
        <div className='detail__container'>
            <div className='detail__with-image'>
              <div className='detail__info wow fadeInLeft delay-0-2s'>
                <h2 className='detail__title'>Создание сайтов под ключ в <a className='text-color-animation' href='./'>Creative Empire</a></h2>
                <div className='detail__description gap-10 mt-40 pl-40'>
                  <p className='detail__paragraph check-mark-before'>Создаем сайты с уникальным дизайном, внедряем все адаптивы, не используя шаблонов и конструкторов</p>
                  <p className='detail__paragraph check-mark-before'>SEO оптимизация уже включена в стоимость</p>
                  <p className='detail__paragraph check-mark-before'>Делаем разработку проектов любой сложности!</p>
                </div>
              </div>
              <div className='detail__image-container wow fadeInRight delay-0-4s'>
                <img className='detail__image' src={createWebsite1} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии" />
              </div>

            </div>
        </div>
        <div className='detail__container bg-2'>
            <div className='detail__full pt-40 pb-60'>
              <p className='detail__description'>Для быстрой навигации по разделам нажмите на ссылку:</p>
              <nav className='detail__nav mt-20'>
                <ul>
                  <li><a href="#forNeedWebsite">Для чего нужен вебсайт?</a></li>
                  <li><a href="#whyweare">Почему мы?</a></li>
                  <li><a href="#forNeedWebsite">Сколько стоит сделать сайт?</a></li>
                  <li><a href="#forNeedWebsite">Виды сайтов</a></li>
                  <li><a href="#forNeedWebsite">Последние проекты</a></li>
                </ul>
              </nav>
            </div>
        </div>
        <div id='forNeedWebsite' className='detail__container'>
          <div className='detail__with-image fd-rr'>
            <div className='detail__info'>
              <h2 className='detail__title wow fadeInDown delay-0-2s'>Почему любой компании необходима <span className='text-color-animation'>разработка вебсайта?</span></h2>
              <div className='detail__description'>
                <p className='detail__paragraph mt-40 wow fadeInUp delay-0-4s'><b>Создание сайтов под ключ</b> – это одна из самых лучших услуг в веб-студии креативного дизайна <a href='./'>Creative Empire</a>. Вне зависимости от того, насколько масштабна ваша фирма, выход на онлайн-рынок позволит вам многократно увеличить свои показатели и расширить базу клиентов.</p>
                <p className='detail__paragraph paragraph-left-border pl-10 mt-20  wow fadeInUp delay-0-6s'>Благодаря хорошему и продающему сайту ваша компания может уверенно занять свои позиции в Интернете, получить узнаваемость и повысить доходность.</p>
              </div>
            </div>
            <div className='detail__image-container wow fadeInRight delay-0-4s'>
              <img className='detail__image' src={createWebsite3} alt="Создание сайтов в Москве - заказать разработку под ключ в веб студии" />
            </div>
            
          </div>
          <div className='detail__description description__dashed mb-60 wow fadeInUp delay-0-6s'>
            <p>Многие с опаской относятся к онлайн-проектам, беспокоясь за то, что это может быть очень дорого. На самом деле, не обязательно сразу создавать что-то очень глобальное, типа многофункционального портала. В Интернет-проектах, как и в оффлайн-бизнесе, можно двигаться постепенно, шаг за шагом совершенствуя свое дело.</p>
            <p>Именно поэтому наша команда разработчиков готова проектировать как одностраничные сайты по бюджетной цене, так и многостраничные интернет-магазины и сайты услуг, в зависимости от пожеланий клиентов. Для того, чтобы определиться с тем, какой сайт нужен именно вам, вы можете оставить заявку или позвонить нам и мы вас с удовольствием проконсультируем.</p>
          </div>
          
        </div>
        <div id='whyweare' className='detail__container bg-2'>
            <div className='detail__full pt-40 pb-60'>
              <div className='detail__header-container'>
                <h2 className='detail__title wow fadeInDown delay-0-2s ta-c'>Если нужен <span className='text-color-animation'>вебсайт под ключ,</span> <br></br>то почему <Link to="/">Creative Empire?</Link></h2>
                <p className='detail__description'>Благодаря тому, что в нашем агентстве работают не только специалисты по разработке сайтов , но еще и маркетологи, мы способны проанализировать рынок уже имеющихся в онлайне предложений по любой нише в москва или любом другом городе, а также внедрить на ваш сайт те необходимые элементы, которые приведут к высокой конверсии.</p>
              </div>
              <div className='detail__switch'>
                <div className='switch-container'>
                  <div className='switch__header'>
                    <div className='switch__header-item' data-header={1} onClick={switchDesciption}>
                      <img src={switchImage1} alt=''/>
                      {/* <img src={iconUserExperience} alt=''/>
                      <img src={iconSeo} alt=''/>
                      <img src={iconShopping} alt=''/> */}
                      <h3>Создание сайта с 0 «под ключ»</h3>
                    </div>
                    <div className='switch__header-item' data-header={2} onClick={switchDesciption}><h1>2</h1></div>
                    <div className='switch__header-item' data-header={3} onClick={switchDesciption}><h1>3</h1></div>
                    <div className='switch__header-item' data-header={4} onClick={switchDesciption}><h1>4</h1></div>


                  </div>
                  <div className='switch__description'>
                    <div className='switch__description-item switch__description-item_active' data-description={1}><h1>1</h1></div>
                    <div className='switch__description-item' data-description={2}><h1>2</h1></div>
                    <div className='switch__description-item' data-description={3}><h1>3</h1></div>
                    <div className='switch__description-item' data-description={4}><h1>4</h1></div>

                  </div>

                </div>
              </div>
            </div>
        </div>
        </>
      }




    </main>
    <Footer />
    </>
  );
}

export default ServiceDetails;