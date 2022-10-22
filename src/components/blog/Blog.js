import React from "react";
import { Route, Switch, Link, withRouter, useHistory } from "react-router-dom";
import ArticleMini from "../articleMini/ArticleMini";

function Blog(props) {
  
  return (
    <>
    
    <h1>BLOG</h1>
    <section className="moviesContainer">
    {props.articlesList.map((article) => (<ArticleMini key={article._id} {...article} />))}
  </section>
    </>
  );
}

export default Blog;