import React from 'react';
import { Link } from 'react-router-dom';
import bannerShapeLeft from '../../assets/images/shapes/banner-shape1.webp';
import bannerShapeRight from '../../assets/images/shapes/banner-shape2.webp';

function PageBanner(props) {

  return (
    <section className='page-banner'>
      <div className='page-banner__container'>
        <h1 className='page-banner__header'>{props.header}</h1>
        <nav className='breadcumps'>
          <ol className='breadcumps-list'>
            <li className='breadcumps-item'>
            <Link to='./'>Домой</Link>
            </li>
            {
              props.breadcumps && 
              <li className='breadcumps-item'>
                <Link to={`/${props.breadcumps.link}`}>{props.breadcumps.linkTitle}</Link>
              </li>
            }
            <li className='breadcumps-item breadcumps-item_active'>
              {props.header}
            </li>
          </ol>
        </nav>
      </div>
      <div className='page-banner__shapes'>
        <div className='page-banner__circle wow zoomInLeft delay-0-2s'></div>
        <img className='page-banner__img left-shape' src={bannerShapeLeft} alt="Фоновая фигура" />
        <img className='page-banner__img right-shape' src={bannerShapeRight} alt="Фоновая фигура" />
      </div>
    </section>
  );
}

export default PageBanner;