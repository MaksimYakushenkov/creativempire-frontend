import React from 'react';
import CountUp from 'react-countup';
import statisticsImage from '../../assets/images/about/statictics.jpg';
import statisticsShape from '../../assets/images/shapes/image-right.png';
import iconSuccess from '../../assets/images/icons/success.webp';
import iconGlobalNetwork from '../../assets/images/icons/global-network.webp';
import iconReview from '../../assets/images/icons/review.webp';
function Statistics() {

  return (
    <section className='statistics'>
      <div className='statistics__container'>
        <div className='statistics__content wow fadeInRight delay-0-4s'>
          <h3 className='section__title first-color'>••• О нас •••</h3>
          <h2 className='section__subtitle'>Наша миссия и достижения</h2>
          <p className='section__paragraph statistics__paragraph'>Мы запланировали перевернуть игру в сфере креативного дизайна и веб-разработки. Никаких примитивных концепций и игры в «поддавки» со временем — только лучшие и современные продукты. Чтобы поддерживать премиальное качество наших работ, мы постоянно учимся и развиваемся. Совершенству нет предела, как говорится!</p>
          <div className='counter-items wow fadeInUp delay-0-6s'>
            <div className='counter-item'>
              <img className='counter__image' src={iconSuccess} alt='Студия креативного дизайна — Creative Empire'/>
              <CountUp  start={0} end={113} className={'counter__value'} />
              <h4 className='counter__title'>Проектов выполнено</h4>
              <p className='counter__paragraph'>И это далеко не предел!</p>
            </div>
            <div className='counter-item'>
              <img className='counter__image' src={iconGlobalNetwork} alt='Студия креативного дизайна — Creative Empire' />
              <CountUp  start={0} end={85} className={'counter__value'} />
              <h4 className='counter__title'>Заказов со всего мира</h4>
              <p className='counter__paragraph'>Клиентооориентированы.</p>
            </div>
            <div className='counter-item'>
              <img className='counter__image' src={iconReview} alt='Студия креативного дизайна — Creative Empire'/>
              <CountUp  start={0} end={132} className={'counter__value'} />
              <h4 className='counter__title'>Счастливых клиентов</h4>
              <p className='counter__paragraph'>Дальше - больше.</p>
            </div>
          </div>
        </div>
        <div className='statistics__image-area wow fadeInLeft delay-0-2s'>
          <img className='statistics__image' src={statisticsImage} alt='Студия креативного дизайна — Creative Empire' />
          <img className='statistics__shape' src={statisticsShape} alt='Студия креативного дизайна — Creative Empire' />
        </div>
      </div>
    </section>
  );
}

export default Statistics;