import React from 'react';
import Parallax from '../Parallax/Parallax';

function PlaceMagic() {

  return (
    <section className='place-magic'>
      
      <div className='place-magic__container'>
        <div className='place-magic__header mt-15 mb-30'>
          <h2 className='section__subtitle'>Место, где рождается <span className='text-color-animation'>креативная магия</span></h2>
          <p className='section__paragraph'>Станьте нашим клиентом уже сейчас и получите премиальный дизайн в подарок!</p>
        </div>
        <button className='place-magic__button'>Связаться</button>
      </div>
      <Parallax classElement="placeMagic" />
    </section>
  );
}

export default PlaceMagic;