import React from 'react';
import { Link } from 'react-router-dom';
import authorAvatar from '../../assets/images/team/authorAvatar.jpg';


function BlogItem(blog) {
  
  return (
    <div className='blog__item'>

          <div className='blog__preview-container'>
            <img className='blog__preview' src={blog.miniPreview} alt={blog.title} />
          </div>

          <div className='blog__description'>

            <p className='blog__date'>{blog.createdAt}</p>
            <Link to={`/blog/${blog.url}`} className="blog__title">{blog.title}</Link>

            <div className='blog__author'>

              <div>
                <img className='blog__author-avatar' src={authorAvatar} alt='Максим Якушенков, создатель веб-студии креативного дизайна Creative Empire' />
              </div>

              <div className='blog__author-description'>
                <p>Автор:</p>
                <a href='ya.ru' className='blog__link'>Максим Якушенков</a>
              </div>

            </div>
          </div>
        </div>
  );
}

export default BlogItem;