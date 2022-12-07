import React, { useEffect, useRef } from 'react';
import { Link, useState, useParams, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './BlogDetails.css';
import authorAvatar from '../../assets/images/team/authorAvatar.jpg';
import { HelmetProvider, Helmet } from 'react-helmet-async';



function BlogDetails(props) {
  const params = useParams();

  React.useEffect(() => {
    props.articlesData.map((article) => {
      if(article.url === params.blogUrl) {
        props.setArticle(article)
      };
    })
  }, [params])

  return (
    <>
    <HelmetProvider><Helmet>
    <title>{props.article.metaTitle}</title>
    <meta name="description" content={props.article.metaDescription} />
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
    <main className='blog-details'>
      <div className='blog-details__container'>
        <div className='blog-details__header'>
          <div className='blog-details__header-container'>
            <h1 className='blog-details__title'>{props.article.title}</h1>
            <p className='blog-details__subtitle'>{props.article.description}</p>
            <img src={props.article.preview} alt={props.article.metaTitle}/>
          </div>
          <div className='blog-details__header-description'>
            <div className='blog-details__header-description-item'>
              <img className='blog-details__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
              <a href='ya.ru' className='blog-details__header-description_link'>Максим Якушенков</a>
            </div>
            <p className='blog-details__date'>{props.article.createdAt}</p>
          </div>
        </div>

        <div className='blog-details__content' dangerouslySetInnerHTML={{ __html: props.article.htmlCode }} />

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

export default withRouter(BlogDetails);