import React from 'react';
import iconCheckout from '../../assets/images/icons/checkout.png';
import iconFlexible from '../../assets/images/icons/flexible.png';
import iconTesting from '../../assets/images/icons/testing.png';
import iconDeployment from '../../assets/images/icons/deployment.png';

function Work() {

  return (
    <section className='work'>
      <div className='work__container'>
        <div className='work__header wow fadeInUp delay-0-2s'>
            <h3 className='section__title first-color'>••• План работы •••</h3>
            <h2 className='section__subtitle'>Всего 4 шага до вашего успеха</h2>
        </div>
        <div className='work__process-container'>
          <div className='work__process wow fadeInUp delay-0-2s'>
            <div className='work__process-header'>
              <span className='work__process-number'>01</span>
              <div className='work__process-image_container'>
                <img className='work__process-image' src={iconCheckout} />
              </div>
            </div>
            <h2 className='work__process-title'>Делаете заказ</h2>
            <p className='work__process-description'>Вы оставляете заявку любым удобным способом. В ближайшее время мы связываемся и обсуждаем детали, получаем предоплату.</p>
          </div>
          <div className='work__process wow fadeInUp delay-0-4s'>
            <div className='work__process-header'>
              <span className='work__process-number'>02</span>
              <div className='work__process-image_container'>
                <img className='work__process-image' src={iconFlexible} />
              </div>
            </div>
            <h2 className='work__process-title'>Разработка</h2>
            <p className='work__process-description'>Мы включаем креатив на максимум и начинаем активно работать над вашим проектом. Параллельно задаём уточняющие вопросы.</p>
          </div>
          <div className='work__process wow fadeInUp delay-0-6s'>
            <div className='work__process-header'>
              <span className='work__process-number'>03</span>
              <div className='work__process-image_container'>
                <img className='work__process-image' src={iconTesting} />
              </div>
            </div>
            <h2 className='work__process-title'>Тестирование</h2>
            <p className='work__process-description'>Мы отдаем на проверку готовую версию продукта и даем время, чтобы оценить шедевр. Если необходимы правки — охотно вносим.</p>
          </div>
          <div className='work__process wow fadeInUp delay-0-8s'>
            <div className='work__process-header'>
              <span className='work__process-number'>04</span>
              <div className='work__process-image_container'>
                <img className='work__process-image' src={iconDeployment} />
              </div>
            </div>
            <h2 className='work__process-title'>Деплой проекта</h2>
            <p className='work__process-description'>Поправляем недочеты, подготавливаем проект к релизу. Получаем оставшуюся оплату и передаем вам все права на владение продуктом</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;