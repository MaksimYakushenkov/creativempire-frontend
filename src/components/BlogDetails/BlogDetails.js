import React, { useEffect, useRef } from 'react';
import { Link, useState, useParams, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './BlogDetails.css';
import authorAvatar from '../../assets/images/team/blog__details-avatar.jpg';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import PageNotFound from '../PageNotFound/PageNotFound';
import Cooperation from '../Cooperation/Cooperation';


function BlogDetails(props) {
  const params = useParams();

  React.useEffect(() => {
    props.articlesData.map((article) => {
      if(article.url === params.blogUrl) {
        props.setArticle(article)
      };
    })
    console.log()
  }, [params])

  return (
    <>
    {Object.keys(props.article).length > 0 ?
    <>
    <HelmetProvider><Helmet>
      <title>{`${props.article.metaTitle} | Creative Empire — премиальная веб-студия креативного дизайна`}</title>
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
            <img className='blog__header-preview' src={props.article.preview} alt={props.article.metaTitle}/>
            <h1 className='blog-details__title'>{props.article.title}</h1>
            <p className='blog-details__subtitle'>{props.article.description}</p>
          </div>
        </div>

        <div className='blog-details__content' dangerouslySetInnerHTML={{ __html: props.article.htmlCode }} />

        <div className='blog-details__tags'>
          <p className='blog-details__date'>Опубликовано:  <span><b>{props.article.createdAt}</b></span></p>
          <p className='blog-details__tags-title'>Теги:</p>
          <ul className='blog-details__tags-list'>
            {props.article.tags.map((tag, index) => {
              return <li key={index} className='blog-details__tags-item'><b>{tag}</b></li>
              })}
          </ul>
        </div>

        <div className='blog-details__author'>
          <img className='blog-details__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
          <div className='blog-details__author-about'>
            <h3>Максим Якушенков</h3>
            <p>СЕО digital-студии креативного дизайна «Creative Empire». Full Stack Developer с опытом работы в IT 10 лет.</p>
            <ul className='blog-details__social-list'>
              <li className='blog-details__social-item'>
                <a href='https://vk.com/maximyakushenkov' target="_blank" rel="noreferrer"><i className='footer__i vkontakte' target="_blank"/></a>
                </li>
              <li className='blog-details__social-item'>
                <a href='https://t.me/yakushenkovm' target="_blank" rel="noreferrer"><i className='footer__i telegram'/></a>
              </li>
              {/* <li className='blog-details__social-item'>
                <a href='https://t.me/yakushenkovm' target="_blank" rel="noreferrer"><i className='footer__i behance'/></a>
              </li> */}
            </ul>
          </div>
        </div>

      </div>
    </main>

    <Cooperation />
     
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

export default withRouter(BlogDetails);