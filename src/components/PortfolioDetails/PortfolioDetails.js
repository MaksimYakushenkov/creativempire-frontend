import React, { useEffect } from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageBanner from '../PageBanner/PageBanner';
import './PortfolioDetails.css';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import PageNotFound from '../PageNotFound/PageNotFound';

function PortfolioDetails(props) {
  const params = useParams();
  console.log()
  React.useEffect(() => {
    props.portfoliosData.map((portfolio) => {
      if(portfolio.url === params.url) {
        props.setPortfolio(portfolio)
      };
    })
  }, [params])

  return (
    <>
    {Object.keys(props.portfolio).length > 0 ?
    <>
    <HelmetProvider><Helmet>
      <title>{`${props.portfolio.metaTitle} | Creative Empire — премиальная веб-студия креативного дизайна`}</title>
      <meta name="description" content={props.portfolio.metaDescription} />

      <meta property="og:title" content={`${props.portfolio.metaTitle} | Creative Empire — премиальная веб-студия креативного дизайна`} />
      <meta property="og:site_name" content="creativempire.ru" />
      <meta property="og:url" content={`https://creativempire.ru/${props.portfolio.url}`} />
      <meta property="og:description" content={props.portfolio.metaDescription} />
      <meta property="og:image" content={props.portfolio.preview} />
    </Helmet></HelmetProvider>
    <Header
    stickyHeader={props.stickyHeader}
    innerWidth={props.innerWidth}
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupWithFormOpened={props.isPopupWithFormOpened}
    setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData} />
    <PageBanner
    header={props.portfolio.title}
    breadcumps={{
      link: 'portfolio',
      linkTitle: 'Портфолио',
    }}
    />
    <main className='project'>
      <div className='project__container'>
        <div className='project__title'>
          <div className='project__title-container wow fadeInUp delay-0-2s'>
            <img className='project__image' src={props.portfolio.preview} alt={props.portfolio.title} />
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
        <div className='project__description'>

          <div className='project__overview wow fadeInUp delay-0-4s'>
            <h3 className='project__overview-title'>Обзор проекта</h3>
            <div className='project__overview-description'  dangerouslySetInnerHTML={{ __html: props.portfolio.overview }} />
          </div>

          {
            props.portfolio.filter === "website" || props.portfolio.filter === "uxui" ?
          
          <div className='project__overview wow fadeInLeft delay-0-4s'>
            <h3 className='project__overview-title'>Реализация проекта</h3>
            <div className='project__overview-description' dangerouslySetInnerHTML={{ __html: props.portfolio.execution }} />
          </div>
          :
          ''
          }
          <div className='project__overview wow fadeInRight delay-0-4s'>
            <h3 className='project__overview-title'>Результаты работы</h3>
            {props.portfolio.filter === "website" || props.portfolio.filter === "uxui" ? <div className='project__overview-description' dangerouslySetInnerHTML={{ __html: props.portfolio.result}} /> : ''}
          </div>

          <div className='project__description-content wow fadeInUp delay-0-8s' dangerouslySetInnerHTML={{ __html: props.portfolio.htmlCode.replace('<h1>&nbsp;</h1>', '')}} />
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
    :
    <PageNotFound
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupOpened={props.isPopupOpened}
    setIsPopupOpened={props.setIsPopupOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    stickyHeader={props.stickyHeader}
    innerWidth={props.innerWidth} 
    isPopupWithFormOpened={props.isPopupWithFormOpened}
    setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
    />
    }
    </>
  );
}

export default PortfolioDetails;