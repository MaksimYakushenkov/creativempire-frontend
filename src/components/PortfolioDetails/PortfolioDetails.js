import React, { useEffect } from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageBanner from '../PageBanner/PageBanner';
import './PortfolioDetails.css';
import projectImage from '../../assets/images/projects/project-details.jpg';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function PortfolioDetails(props) {
  const params = useParams();

  React.useEffect(() => {
    props.portfoliosData.map((portfolio) => {
      if(portfolio.url === params.url) {
        props.setPortfolio(portfolio)
      };
    })
  }, [params])

  return (
    <>
    <HelmetProvider><Helmet>
    <title>{props.portfolio.metaTitle}</title>
    <meta name="description" content={props.portfolio.metaDescription} />
    </Helmet></HelmetProvider>
    <Header 
    stickyHeader={props.stickyHeader}
    innerWidth={props.innerWidth} 
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupWithFormOpened={props.isPopupWithFormOpened}
    setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
    <PageBanner 
    header={props.portfolio.title}
    breadcumps={{
      link:'portfolio',
      linkTitle: 'Портфолио',
    }}
    />
    <main className='project'>
      <div className='project__container'>
        <div className='project__title'>
          <div className='project__title-container wow fadeInUp delay-0-2s'>
            <img className='project__image' src={props.portfolio.preview} alt={props.portfolio.title}/>
            <h2 className='project__header'>{props.portfolio.title}</h2>
            <p className='project__paragraph'>{props.portfolio.decription}</p>
          </div>
          <div className='project__info wow fadeInUp delay-0-4s'>
            <h3 className='project__info-title project__info-title_first'>Краткая информация:</h3>
            <div className='project__info-list'>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Категория</h3>
                <p className='project__category'>{props.portfolio.category}</p>
              </div>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Клиент</h3>
                <p className='project__client'>{props.portfolio.client}</p>
              </div>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Длительность</h3>
                <p className='project__duration'>{props.portfolio.duration} часов</p>
              </div>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Стоимость</h3>
                <p className='project__category'>{props.portfolio.price} 000 рублей</p>
              </div>
            </div>
          </div>

        </div>
        <div className='project__description wow fadeInUp delay-0-6s'>
          <div className='project__description-content' dangerouslySetInnerHTML={{ __html: props.portfolio.htmlCode }}/>
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

export default PortfolioDetails;