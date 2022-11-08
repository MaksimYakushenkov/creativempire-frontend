import React from 'react';
import Collapse from '../collapse/Collapse';

function OurServices(props) {

  return (
    <section className='ourServices'>
      <div className='ourServices__container'>
        <h3 className='section__title first-color'>••• Наши услуги •••</h3>
        <h2 className='section__subtitle'>Широкий спектр услуг по дизайну</h2>
        <p className='section__paragraph'>Наша студия креативного дизайна отличается от других по-настоящему <b>индивидуальным</b> подходом и <b>лояльным</b> отношением к клиенту.</p>
      </div>
      <div className='ourServices__collapse'>
        <Collapse />
      </div>
    </section>
);
}

export default OurServices;