import React from "react";
import { Route, Switch, Link, withRouter, useHistory } from "react-router-dom";

function ArticleMini(article) {
  

  return (
    <article className="article article__mini">
    <h1>{article.name}</h1>
    <p>{article.about}</p>
    <Link to={`/articles/${article.url}`}>LIBK</Link>
    </article>
  );
}

export default ArticleMini;