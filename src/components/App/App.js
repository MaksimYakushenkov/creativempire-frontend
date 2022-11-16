import React, { Component } from 'react';
import { Route, Switch, Link, withRouter, useHistory } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import WOW from 'wow.js';
import ArticleFull from '../articleFull/ArticleFull';
import articlesApi from '../../utils/mainApi';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  const [stickyHeader, setStickyHeader] = React.useState(false);
  const [scrollToTopHidden, setScrollToTopHidden] = React.useState(true);

  React.useEffect(() => {
    new WOW().init();
    window.addEventListener('scroll', () => {
      if(window.pageYOffset <= 118){
        setStickyHeader(false);
        setScrollToTopHidden(true);
      } else {
        setStickyHeader(true);
        setScrollToTopHidden(false);
      }
   });
  }, []);
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
    <div className="App">
    <div className="page">
    <HelmetProvider><Helmet><title>My Title</title></Helmet></HelmetProvider>
    <Switch>
    <Route exact path="/">
      <Header
      stickyHeader={stickyHeader}
      />
      <Home />
      <Footer />
      <ScrollToTop scrollToTopHidden={scrollToTopHidden} />
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
    </div>
    </div>
);
}

export default App;