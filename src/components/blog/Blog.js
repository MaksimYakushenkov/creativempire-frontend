import React from 'react';
import BlogItem from '../BlogItem/BlogItem';

function Blog(props) {

  return (
    <section className='blog'>
      <div className='section__header wow fadeInUp delay-0-2s'>
        <h3 className='section__title first-color'>••• Лучший блог •••</h3>
        <h2 className='section__subtitle'>Свежие новости, акции и спецпредложения</h2>
      </div>
      <div className='blog__container wow fadeInUp delay-0-4s'>
      {props.articlesData.map((article) => (<BlogItem key={article._id} {...article}/>))}
      </div>
    </section>
  );
}

export default Blog;