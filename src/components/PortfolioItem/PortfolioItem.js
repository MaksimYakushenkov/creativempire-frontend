import React from 'react';
import { Link } from 'react-router-dom';
import iconLink from '../../assets/images/icons/link.webp';


function PortfolioItem(portfolio) {

  return (
    <div>
      <div className={`portfolio__item ${portfolio.filter}`}>
        <img className='portfolio__image' src={portfolio.miniPreview} alt={portfolio.title} />
        <div className='portfolio__description'>
          <Link to={`/portfolio/${portfolio.url}`} className="portfolio__title">{portfolio.title}</Link>
          <p className='portfolio__subtitle'>{portfolio.description}</p>
        </div>
        <div className='portfolio__hover-container'>
        <Link to={`/portfolio/${portfolio.url}`} className="portfolio__title"><img className='portfolio__hover-image' src={iconLink} alt={portfolio.title}/></Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;