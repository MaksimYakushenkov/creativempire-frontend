import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from '../Parallax/Parallax';

function PlaceMagic() {

  return (
    <section className='place-magic'>
      
      <div className='place-magic__container wow fadeInUp delay-0-2s'>
        <div className='place-magic__header mt-15 mb-30'>
          <h2 className='section__subtitle'>Место, где рождается <span className='text-color-animation'>креативная магия</span></h2>
          <p className='section__paragraph'>Станьте нашим клиентом уже сейчас и получите премиальный дизайн в подарок!</p>
        </div>
        <Link to='/contact' className='place-magic__button'>Связаться</Link>
      </div>

      <Parallax classElement="placeMagic" />

    </section>
  );
}

export default PlaceMagic;