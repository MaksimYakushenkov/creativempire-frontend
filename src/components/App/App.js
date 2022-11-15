import React, { Component } from 'react';
import { Route, Switch, Link, withRouter, useHistory } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';

import ArticleFull from '../articleFull/ArticleFull';
import articlesApi from '../../utils/mainApi';
import Header from '../Header/Header';
import Home from '../Home/Home';

function App() {
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
      <Header />
      <Home />
      
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