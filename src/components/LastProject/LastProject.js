import React from 'react';
import { Link } from 'react-router-dom';
import iconLink from '../../assets/images/icons/link.webp';


function LastProject(project) {

  return (
    <div>
    <div className='latestProjects__project wow fadeInUp delay-0-2s'>
      <img className='latestProjects__image' src={project.preview} alt={project.title}/>
      <div className='latestProjects__description'>
        <a className='latestProjects__title' target='_blank' href='ya.ru'>{project.title}</a>
        <p className='latestProjects__subtitle'>{project.description}</p>
      </div>
      <div className='latestProjects__hover-container'>
        <Link to={`/portfolio/${project.url}`} className="latestProjects__hover-link"><img className='latestProjects__hover-image' src={iconLink} alt={project.title}/></Link>
      </div>
    </div>
  </div>
  );
}

export default LastProject;