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

function App() {
  const [stickyHeader, setStickyHeader] = React.useState(false);
  const [scrollToTopHidden, setScrollToTopHidden] = React.useState(true);
  const history = useHistory();
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

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
  }, []);

  function detectSize() {
    setInnerWidth(window.innerWidth);
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
    <HelmetProvider><Helmet><title>My Title</title></Helmet></HelmetProvider><Switch>
    <Route exact path="/">
      <Header innerWidth={innerWidth}
        stickyHeader={stickyHeader} />
      <Home innerWidth={innerWidth} />
      <Footer />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/services/:service">
      <ServiceDetails stickyHeader={stickyHeader} innerWidth={innerWidth}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/services">
      <Header
        innerWidth={innerWidth}
        stickyHeader={stickyHeader}
      />
      <PageBanner
        header="Услуги и цены"
      />
      <Cooperation />
      <Work />
      <Services />
      <PlaceMagic />
      <Footer />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/portfolio"
    >
      <Portfolio innerWidth={innerWidth} stickyHeader={stickyHeader} />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/work-plan">
      <WorkPlan innerWidth={innerWidth} stickyHeader={stickyHeader}/>
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/contact">
      <Contact innerWidth={innerWidth} stickyHeader={stickyHeader}/>
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
    </Route>
    <Route path="/calculator">
      <Calculator stickyHeader={stickyHeader} innerWidth={innerWidth}
      />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} innerWidth={innerWidth}/>
    </Route>

    <Route path="/blog">
      <HelmetProvider><Helmet><title>Blog</title></Helmet></HelmetProvider>
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

export default App;