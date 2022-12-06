import React, { useEffect } from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageBanner from '../PageBanner/PageBanner';
import './PortfolioDetails.css';
import projectImage from '../../assets/images/projects/project-details.jpg';
import PlaceMagic from '../PlaceMagic/PlaceMagic';

function PortfolioDetails(props) {

  return (
    <>
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
    header="Посадочная страница таролога"
    breadcumps={{
      link:'portfolio',
      linkTitle: 'Портфолио',
    }}
    />
    <main className='project'>
      <div className='project__container'>
        <div className='project__title'>
          <div className='project__title-container wow fadeInUp delay-0-2s'>
            <img className='project__image' src={projectImage} alt='Из хедера'/>
            <h2 className='project__header'>Посадочная страница таролога</h2>
            <p className='project__paragraph'>Лендинг, с несколькими страницами</p>
          </div>
          <div className='project__info wow fadeInUp delay-0-4s'>
            <h3 className='project__info-title project__info-title_first'>Краткая информация:</h3>
            <div className='project__info-list'>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Категория</h3>
                <p className='project__category'>Лендинг с несколькими страницами</p>
              </div>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Клиент</h3>
                <p className='project__client'>Астролог со стажем</p>
              </div>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Длительность</h3>
                <p className='project__duration'>160 часов</p>
              </div>
              <div className='project__info-item'>
                <h3 className='project__info-title'>Стоимость</h3>
                <p className='project__category'>70 000 рублей</p>
              </div>
            </div>
          </div>

        </div>
        <div className='project__description'>
          <div className='project__description-content'>
            <p>Какой то текст бла бла бла</p>
          </div>
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