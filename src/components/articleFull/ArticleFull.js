import React from "react";
import { useParams } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';


function ArticleFull(props) {
  let { url } = useParams();
  
  React.useEffect(() => {
   props.getArticle(url);
  }, []);

  return (
    <>
    <HelmetProvider><Helmet>
      <title>{props.article.metaTitle}</title>
      <meta name="description" content={props.article.metaDescription} />
      <meta property="og:title" content={props.article.metaTitle} />
      <meta property="og:site_name" content="creativempire.ru" />
      <meta property="og:url" content={`https://creativempire.ru/${props.article.url}`} />
      <meta property="og:description" content={props.article.metaDescription} />
      <meta property="og:image" content={props.article.preview} />
      <meta property="og:image:width" content="968" />
      <meta property="og:image:height" content="504" />
    </Helmet></HelmetProvider>
    
      <h1>{props.article.metaTitle}</h1><p>{url}</p>
      <div dangerouslySetInnerHTML={{ __html: props.article.htmlCode }} />
      </>
  );
}

export default ArticleFull;