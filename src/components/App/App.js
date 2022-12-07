import React, { Component, useEffect } from 'react';
import { Route, Switch, Link, withRouter, useHistory, } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import WOW from 'wow.js';
import ArticleFull from '../articleFull/ArticleFull';
import articlesApi from '../../utils/mainApi';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Services from '../Services/Services';
import PageBanner from '../PageBanner/PageBanner';
import Cooperation from '../Cooperation/Cooperation';
import Work from '../Work/Work';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Portfolio from '../Portfolio/Portfolio';
import WorkPlan from '../WorkPlan/WorkPlan';
import Contact from '../Contact/Contact';
import Calculator from '../Calculator/Calculator';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails';
import BlogDetails from '../BlogDetails/BlogDetails';
import mainApi from '../../utils/mainApi/mainApi';

function App() {
  const [articlesData, setAcrticlesData] = React.useState([]);
  const [article, setArticle] = React.useState({});
  const [portfolio, setPortfolio] = React.useState({});
  const [portfoliosData, setPortfoliosData] = React.useState([]);
  const [stickyHeader, setStickyHeader] = React.useState(false);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [isPopupWithFormOpened, setIsPopupWithFormOpened] = React.useState(false);
  const [isPopupSliderOpened, setIsPopupSliderOpened] = React.useState(false);
  const [scrollToTopHidden, setScrollToTopHidden] = React.useState(true);
  const history = useHistory();
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [infoData, setInfoData] = React.useState({
    img: "",
    text: ""
  });

  React.useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [innerWidth]);

  history.listen((location, action) => {
    window.scrollTo(0, 0)
  });

  React.useEffect(() => {
    new WOW().init();
    window.addEventListener('scroll', () => {
      if(window.pageYOffset <= 50){
        setStickyHeader(false);
        setScrollToTopHidden(true);
      } else {
        setStickyHeader(true);
        setScrollToTopHidden(false);
      }
   });
   getData();
  }, []);

  React.useEffect(() => {
    console.log(portfoliosData);
  }, [articlesData, portfoliosData])

  function detectSize() {
    setInnerWidth(window.innerWidth);
  }

  function getData() {
    mainApi.getArticles()
    .then((articles) => {
      setAcrticlesData(articles.articles);
    })
    .catch((err) => {
      console.log(err);
    });

    mainApi.getPortfolio()
    .then((portfolios) => {
      setPortfoliosData(portfolios.portfolios);
    })
    .catch((err) => {
      console.log(err);
    });

  }
  // const [articlesList, setAcrticleList] = React.useState([]);
  // const [article, setAcrticle] = React.useState([]);
  // React.useEffect(() => {
  //   getArticlesData();
  // }, []);
  
  // function getArticlesData() {
  //   articlesApi.getArticles()
  //   .then(data => {
  //     setAcrticleList(data.articles);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }
  // function getArticle(url) {
  //   articlesApi.getArticle(url)
  //   .then(data => {
  //     setAcrticle(data.article[0]);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }
  

return (

    <>
    
    <Switch>
    <Route exact path="/">
      <HelmetProvider><Helmet>
      <title>Title</title>
      <meta name="description" content='ddd' />
      </Helmet></HelmetProvider>
      <Header 
        innerWidth={innerWidth}
        stickyHeader={stickyHeader}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
        isPopupWithFormOpened={isPopupWithFormOpened}
        setIsPopupWithFormOpened={setIsPopupWithFormOpened}
        infoData={infoData}
        setInfoData={setInfoData}
      />
      <Home
        articlesData={articlesData}
        portfoliosData={portfoliosData}
        innerWidth={innerWidth} 
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
        isPopupSliderOpened={isPopupSliderOpened}
        setIsPopupSliderOpened={setIsPopupSliderOpened}
        infoData={infoData}
        setInfoData={setInfoData}/>
      <Footer 
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/services/:service">
      <ServiceDetails
      stickyHeader={stickyHeader}
      innerWidth={innerWidth}
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/services">
      <Header
        innerWidth={innerWidth}
        stickyHeader={stickyHeader}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
        isPopupWithFormOpened={isPopupWithFormOpened}
        setIsPopupWithFormOpened={setIsPopupWithFormOpened}
        infoData={infoData}
        setInfoData={setInfoData}
      />
      <PageBanner
        header="Услуги и цены"
      />
      <Cooperation />
      <Work />
      <Services />
      <PlaceMagic />
      <Footer 
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/portfolio/:url">
      <PortfolioDetails
      portfolio={portfolio}
      setPortfolio={setPortfolio}
      portfoliosData={portfoliosData}
      stickyHeader={stickyHeader}
      innerWidth={innerWidth}
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/portfolio"
    >
      <Portfolio
      portfoliosData={portfoliosData}
      innerWidth={innerWidth} 
      stickyHeader={stickyHeader}
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/work-plan">
      <WorkPlan 
      innerWidth={innerWidth} 
      stickyHeader={stickyHeader}
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/contact">
      <Contact
      innerWidth={innerWidth}
      stickyHeader={stickyHeader}
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/calculator">
      <Calculator
      stickyHeader={stickyHeader}
      innerWidth={innerWidth}
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} innerWidth={innerWidth}/>
    </Route>

    <Route path="/blog/:blogUrl">
      <BlogDetails
      article={article}
      setArticle={setArticle}
      articlesData={articlesData}
      stickyHeader={stickyHeader}
      innerWidth={innerWidth}
      isProcessing={isProcessing}
      setIsProcessing={setIsProcessing}
      isPopupWithFormOpened={isPopupWithFormOpened}
      setIsPopupWithFormOpened={setIsPopupWithFormOpened}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
      infoData={infoData}
      setInfoData={setInfoData}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
      {/*
        <Blog
        articlesList={articlesList} />
        </Route>
        <Route path="/articles/:url">
    
        <ArticleFull article={article} getArticle={getArticle} /> */}
    </Route>
  </Switch>
  </>

);
}

export default withRouter(App);