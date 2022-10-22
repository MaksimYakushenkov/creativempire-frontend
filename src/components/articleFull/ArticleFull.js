import React from "react";
import { Route, Switch, Link, withRouter, useHistory, useParams } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';


function ArticleFull(props) {
  let { url } = useParams();
  React.useEffect(() => {
   props.getArticle(url);
  }, []);
  return (
    <>
    <HelmetProvider><Helmet><title>{props.article.metaTitle}</title>
    <meta name="description" content={props.article.metaDescription} /></Helmet></HelmetProvider>
    
      <h1>{props.article.metaTitle}</h1><p>{url}</p>
      <div dangerouslySetInnerHTML={{ __html: props.article.htmlCode }} />
      </>
  );
}

export default ArticleFull;