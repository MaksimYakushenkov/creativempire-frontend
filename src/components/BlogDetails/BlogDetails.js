import React, { useEffect } from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './BlogDetails.css';
import projectImage from '../../assets/images/projects/project-details.jpg';
import authorAvatar from '../../assets/images/team/authorAvatar.jpg';



function BlogDetails(props) {
  const params = useParams();

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
    <main className='blog-details'>
      <div className='blog-details__container'>
        <div className='blog-details__header'>
          <div className='blog-details__header-container'>
            <h1 className='blog-details__title'>АПИ Как быстро раскрутиться в веб-разработке?</h1>
            <p className='blog-details__subtitle'>АПИ Какой то короткий и небольшой текст о том, что в статье</p>
            <img src={projectImage} alt='АПИ'/>
          </div>
          <div className='blog-details__header-description'>
            <div className='blog-details__header-description-item'>
              <img className='blog-details__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
              <a href='ya.ru' className='blog-details__header-description_link'>Максим Якушенков</a>
            </div>
            <p className='blog-details__date'>12 March 2022</p>
          </div>
        </div>

        <div className='blog-details__content'>АПИ ЧТО ТО </div>

        <div className='blog-details__tags'>
          <h3 className='blog-details__tags-title'>Теги:</h3>
          <ul className='blog-details__tags-list'>
            <li className='blog-details__tags-item'>Апи Дизайн</li>
            <li className='blog-details__tags-item'>Апи Брендинг</li>
            <li className='blog-details__tags-item'>Апи Маркетинг</li>
          </ul>
        </div>

        <div className='blog-details__author'>
          <img className='blog-details__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
          <div className='blog-details__author-about'>
            <h3>Максим Якушенков</h3>
            <p>Краткая инфа о себе Краткая инфа о себеКраткая инфа о себеКраткая инфа о себеКраткая инфа о себеКраткая инфа о себеКраткая инфа о себе</p>
            <ul className='blog-details__social-list'>
              <li className='blog-details__social-item'>VK</li>
              <li className='blog-details__social-item'>TG</li>
              <li className='blog-details__social-item'>BE</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
     
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

export default BlogDetails;