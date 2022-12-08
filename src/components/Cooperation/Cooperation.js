import React from 'react';
import { Link } from 'react-router-dom';
import iconDoubleRight from '../../assets/images/icons/double-right.png';
import cooperationImage from '../../assets/images/cooperation/cooperation-2.png';

function Cooperation() {

  return (
    <section className='cooperation'>
      <div className='cooperation__container'>
        <div className='cooperation__header wow fadeInLeft delay-0-2s'>
          <h3 className='section__title first-color'>••• Давайте сотрудничать! •••</h3>
          <h2 className='section__subtitle'>Откройте для себя экстраординарный дизайн вместе с <a className='text-color-animation' href='./'>Creative Empire</a></h2>
          <p className='section__paragraph'>Начнем создавать для Вас лучший проект в ближайшее время — оставьте заявку онлайн.</p>
          <Link to="/contact" className='cooperation__button'>Связаться
            <img src={iconDoubleRight} /></Link>
        </div>
        <img className='cooperation__image wow fadeInRight delay-0-4s' src={cooperationImage} alt="Контентная картинка" />
      </div>
    </section>
  );
}

export default Cooperation;