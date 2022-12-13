import React from 'react';
import './WorkPlan.css';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Cooperation from '../Cooperation/Cooperation';
import Footer from '../Footer/Footer';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function WorkPlan(props) {

  return (
    <>
    <HelmetProvider><Helmet>
      <title>{`План работы от и до | Creative Empire — премиальная веб-студия креативного дизайна`}</title>
      <meta name="description" content="Рассказываем о плане работы после заказа и оплаты проекта. Creative Empire — премиальная веб-студия креативного дизайна." />

      <meta property="og:title" content="План работы от и до | Creative Empire — премиальная веб-студия креативного дизайна" />
      <meta property="og:site_name" content="creativempire.ru" />
      <meta property="og:url" content="https://creativempire.ru/work-plan" />
      <meta property="og:description" content="Рассказываем о плане работы после заказа и оплаты проекта. Creative Empire — премиальная веб-студия креативного дизайна." />
    </Helmet></HelmetProvider>
    <Header
    innerWidth={props.innerWidth}
    stickyHeader={props.stickyHeader}
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupWithFormOpened={props.isPopupWithFormOpened}
    setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
    <PageBanner
      header="План работы"
    />
    <Cooperation />
    <main className='work-plan'>
      <div className='work-plan__container'>
        <div className='section__header wow fadeInUp delay-0-2s'>
          <h3 className='section__title first-color'>••• Легкое сотрудничество •••</h3>
          <h2 className='section__subtitle'>Этапы от знакомства до результата</h2>
        </div>
        
        <div className='work-plan__list'>

          <div className='work-plan__list-item work-plan__list-item_left wow fadeInLeft delay-0-2s'>
            <div className='work-plan__image first'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Собираем информацию</h3>
              <p className='work-plan__item-description'>
                Для создания лучшего проекта нам нужна <b>информация</b>. Хорошо, если мы будем знать как можно больше: ваши предпочтения в дизайне, способ монетизации, ваше представление готового продукта (как будет выглядеть).<br/><br/>В этом нам поможет специальный <b>бриф</b>, который мы вышлем вам при первом знакомстве. На этом этапе определяем полную стоимость проекта, сроки и заключаем договор (если нужно).
              </p>
              <div className='work-plan__number work-plan__number_left wow fadeInRight delay-0-4s'>1</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_right wow fadeInRight delay-0-2s'>
            <div className='work-plan__image second'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Проводим анализ конкурентов</h3>
              <p className='work-plan__item-description'>
                Что помогает пользователю совершить конверсию? Правильно — <b>УТП (уникальное торговое предложение)</b>. Именно поэтому мы сначала проанализируем конкурентов, а затем определим положительные и отрицательные качества их сайта.<br/><br/>На основании этих данных мы согласуем с вами уникальное УТП, которое сможет помочь в будущем выйти на лидирующие позиции.
              </p>
              <div className='work-plan__number work-plan__number_right wow fadeInLeft delay-0-4s'>2</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_left wow fadeInLeft delay-0-2s'>
            <div className='work-plan__image third'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Прототипируем дизайн</h3>
              <p className='work-plan__item-description'>
                После первых 2-х шагов мы уже имеем представление о будущем сайте. Осталось перенести это «на бумагу», только в нашем случае — в проект. <br/><br/>Мы начинаем работать с Frontend-частью: <b>делаем структурированную визуальную часть</b> (включая точки захвата внимания) и отдаем её вам на согласование. На этом этапе можно вносить сложные правки, если это необходимо, но советуем положиться на наш взгляд.  
              </p>
              <div className='work-plan__number work-plan__number_left wow fadeInRight delay-0-4s'>3</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_right wow fadeInRight delay-0-2s'>
            <div className='work-plan__image fourth'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Добавляем функциональность</h3>
              <p className='work-plan__item-description'>
                Как можно представить сайт без работающей кнопки или формы? После согласования визуальной части сайта, мы приступаем к разработке программной — <b>наделяем сайт «подкапотной» функциональностью</b>. <br/><br/>Это практически завершающий из основных моментов разработки. После окончания работ по Backend'у, мы тестируем все запрограммированные компоненты на всевозможные ошибки. 
              </p>
              <div className='work-plan__number work-plan__number_right wow fadeInLeft delay-0-4s'>4</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_left wow fadeInLeft delay-0-2s'>
            <div className='work-plan__image fifth'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Публикуем сайт в интернете</h3>
              <p className='work-plan__item-description'>
                А вот и на подошел завершающий этап — мы <b>размещаем сайт на домене и хостинге</b>, которые регистрируются на вас, производим необходимые настройки в панели управления поисковых систем (Google, Yandex). <br/><br/>Вы уже можете хвастаться друзьям и коллегам своим премиальным сайтом, разработанным нами под ключ. Сайт становится <b>доступен в интернете</b> и готов принимать посетителей.
              </p>
              <div className='work-plan__number work-plan__number_left wow fadeInRight delay-0-4s'>5</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_right wow fadeInRight delay-0-2s'>
            <div className='work-plan__image sixth'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Наполняем контентом (по запросу)</h3>
              <p className='work-plan__item-description'>
                При сдаче проекта мы обязательно научим вас пользоваться системой управления сайта, расскажем как добавлять и редактировать карточки товара, публиковать статьи или новости. Мы также сможем делать это самостоятельно в долгосрочной перспективе. <br/><br/>Теперь ваш не только красивый, функциональный, но и информативный <b>сайт окончательно готов к приему посетителей и генерации лидов</b>.
              </p>
              <div className='work-plan__number work-plan__number_right wow fadeInLeft delay-0-4s'>6</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_left wow fadeInLeft delay-0-2s no-after'>
            <div className='work-plan__image seventh'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Техподдержка (по запросу)</h3>
              <p className='work-plan__item-description'>
                Все жизненные процессы компании важно вовремя отражать на сайте — в результате чего может возникнуть <b>необходимость в доработке функциональности</b>.<br/><br/>Мы настроены на долгосрочное сотрудничество с нашим клиентом. Поэтому всегда готовы оказывать любую техническую поддержку сайта. Вы сможете <b>решить любой вопрос </b>, связанный с работой и редактированием компонентов действующего сайта.
              </p>
              <div className='work-plan__number work-plan__number_left wow fadeInRight delay-0-4s'>7</div>
            </div>
          </div>

        </div>

      </div>
    </main>
    <PlaceMagic />
    <Footer
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupOpened={props.isPopupOpened}
    setIsPopupOpened={props.setIsPopupOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
    </>
  );
}

export default WorkPlan;