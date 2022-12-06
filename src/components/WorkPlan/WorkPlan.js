import React from 'react';
import './WorkPlan.css';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Cooperation from '../Cooperation/Cooperation';
import Footer from '../Footer/Footer';

function WorkPlan(props) {

  return (
    <>
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
              <h3 className='work-plan__title'>Собираем необходимую информацию</h3>
              <p className='work-plan__item-description'>Перед тем, как создать любой проект, нам необходимо будет получить от вас как можно больше информации о предпочтениях в дизайне, планах на способ будущей монетизации сайта, о том, каким свой будущий сайт видите именно вы. На этом этапе согласовывается полная стоимость сайта, количество разворотов, информативная и другая насыщенность будущего проекта</p>
              <div className='work-plan__number work-plan__number_left wow fadeInRight delay-0-4s'>1</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_right wow fadeInRight delay-0-2s'>
            <div className='work-plan__image second'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Собираем необходимую информацию</h3>
              <p className='work-plan__item-description'>Перед тем, как создать любой проект, нам необходимо будет получить от вас как можно больше информации о предпочтениях в дизайне, планах на способ будущей монетизации сайта, о том, каким свой будущий сайт видите именно вы. На этом этапе согласовывается полная стоимость сайта, количество разворотов, информативная и другая насыщенность будущего проекта</p>
              <div className='work-plan__number work-plan__number_right wow fadeInLeft delay-0-4s'>2</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_left wow fadeInLeft delay-0-2s'>
            <div className='work-plan__image first'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Собираем необходимую информацию</h3>
              <p className='work-plan__item-description'>Перед тем, как создать любой проект, нам необходимо будет получить от вас как можно больше информации о предпочтениях в дизайне, планах на способ будущей монетизации сайта, о том, каким свой будущий сайт видите именно вы. На этом этапе согласовывается полная стоимость сайта, количество разворотов, информативная и другая насыщенность будущего проекта</p>
              <div className='work-plan__number work-plan__number_left wow fadeInRight delay-0-4s'>3</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_right wow fadeInRight delay-0-2s'>
            <div className='work-plan__image second'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Собираем необходимую информацию</h3>
              <p className='work-plan__item-description'>Перед тем, как создать любой проект, нам необходимо будет получить от вас как можно больше информации о предпочтениях в дизайне, планах на способ будущей монетизации сайта, о том, каким свой будущий сайт видите именно вы. На этом этапе согласовывается полная стоимость сайта, количество разворотов, информативная и другая насыщенность будущего проекта</p>
              <div className='work-plan__number work-plan__number_right wow fadeInLeft delay-0-4s'>4</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_left wow fadeInLeft delay-0-2s'>
            <div className='work-plan__image first'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Собираем необходимую информацию</h3>
              <p className='work-plan__item-description'>Перед тем, как создать любой проект, нам необходимо будет получить от вас как можно больше информации о предпочтениях в дизайне, планах на способ будущей монетизации сайта, о том, каким свой будущий сайт видите именно вы. На этом этапе согласовывается полная стоимость сайта, количество разворотов, информативная и другая насыщенность будущего проекта</p>
              <div className='work-plan__number work-plan__number_left wow fadeInRight delay-0-4s'>5</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_right wow fadeInRight delay-0-2s'>
            <div className='work-plan__image second'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Собираем необходимую информацию</h3>
              <p className='work-plan__item-description'>Перед тем, как создать любой проект, нам необходимо будет получить от вас как можно больше информации о предпочтениях в дизайне, планах на способ будущей монетизации сайта, о том, каким свой будущий сайт видите именно вы. На этом этапе согласовывается полная стоимость сайта, количество разворотов, информативная и другая насыщенность будущего проекта</p>
              <div className='work-plan__number work-plan__number_right wow fadeInLeft delay-0-4s'>6</div>
            </div>
          </div>

          <div className='work-plan__list-item work-plan__list-item_left wow fadeInLeft delay-0-2s no-after'>
            <div className='work-plan__image first'></div>
            <div className='work-plan__description'>
              <h3 className='work-plan__title'>Собираем необходимую информацию</h3>
              <p className='work-plan__item-description'>Перед тем, как создать любой проект, нам необходимо будет получить от вас как можно больше информации о предпочтениях в дизайне, планах на способ будущей монетизации сайта, о том, каким свой будущий сайт видите именно вы. На этом этапе согласовывается полная стоимость сайта, количество разворотов, информативная и другая насыщенность будущего проекта</p>
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