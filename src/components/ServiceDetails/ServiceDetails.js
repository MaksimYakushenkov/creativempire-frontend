import React, { useEffect } from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Footer from '../Footer/Footer';
import './ServiceDetails.css';
import createWebsite1 from '../../assets/images/services/create-website1.png';
import createWebsite2 from '../../assets/images/services/create-website2.png';
import createWebsite3 from '../../assets/images/services/create-website3.png';
import iconWebsite from '../../assets/images/icons/website.png';
import iconUi from '../../assets/images/icons/ui.png';
import iconWordpress from '../../assets/images/icons/wordpress.png';
import switchImage1 from '../../assets/images/services/switchImage1.png';
import switchImage2 from '../../assets/images/services/switchImage2.png';
import switchImage3 from '../../assets/images/services/switchImage3.png';
import switchImage4 from '../../assets/images/services/switchImage4.png';
import LatestProjects from '../LatestProjects/LatestProjects';
import CreateWebsite from '../CreateWebsite/CreateWebsite';
import UxUiDesign from '../UxUiDesign/UxUiDesign';


function ServiceDetails(props) {
  const params = useParams();

  const switchDescriptionList = Array.from(document.querySelectorAll('.switch__description-item'));
  const switchHeaderList = Array.from(document.querySelectorAll('.switch__header-item'));
  const createWebsites = {
    header:"Разработка веб-сайтов",
        breadcump: {
          link:'services',
          linkTitle: 'Услуги',
        }
  }
  


  function switchDesciption(e) {
    switchHeaderList.map((header) => {
      header.classList.remove('switch__header-item_active');
    })
    e.currentTarget.classList.add('switch__header-item_active');
    switchDescriptionList.map((description) => {
      if(description.dataset.description === e.currentTarget.dataset.header) {
        description.classList.add('switch__description-item_active');
    } else {
      description.classList.remove('switch__description-item_active');
    }
  })
  }

  return (
    <>
    <Header stickyHeader={props.stickyHeader} />
      { params.service === 'create-website' && 
        <CreateWebsite 
        service={params.service}
        header="Разработка веб-сайтов"
        breadcumps={{
          link:'services',
          linkTitle: 'Услуги',
        }}
        switchDesciption={switchDesciption}/> 
      }
      { params.service === 'ux-ui-design' && 
        <UxUiDesign 
        service={params.service}
        header="Разработка UX/UI-дизайна"
        breadcumps={{
          link:'services',
          linkTitle: 'Услуги',
        }}
        switchDesciption={switchDesciption}/> 
      }
      { params.service === '' && <CreateWebsite switchDesciption={switchDesciption}/> }




    <Footer />
    </>
  );
}

export default ServiceDetails;