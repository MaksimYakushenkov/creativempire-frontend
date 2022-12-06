import React, { useEffect } from 'react';
import { Link, useState, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServiceDetails.css';
import CreateWebsite from '../CreateWebsite/CreateWebsite';
import UxUiDesign from '../UxUiDesign/UxUiDesign';
import CreativeDesign from '../CreativeDesign/CreativeDesign';


function ServiceDetails(props) {
  const params = useParams();

  const switchDescriptionList = Array.from(document.querySelectorAll('.switch__description-item'));
  const switchHeaderList = Array.from(document.querySelectorAll('.switch__header-item'));

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
    <Header 
    stickyHeader={props.stickyHeader}
    innerWidth={props.innerWidth} 
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupWithFormOpened={props.isPopupWithFormOpened}
    setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
      { params.service === 'create-website' && 
        <CreateWebsite 
        service={params.service}
        header="Разработка веб-сайтов"
        breadcumps={{
          link:'services',
          linkTitle: 'Услуги',
        }}
        innerWidth={props.innerWidth}
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
        innerWidth={props.innerWidth}
        switchDesciption={switchDesciption}/> 
      }

      { params.service === 'creative-design' && 
        <CreativeDesign 
        service={params.service}
        header="Креативный дизайн"
        breadcumps={{
          link:'services',
          linkTitle: 'Услуги',
        }}
        innerWidth={props.innerWidth}
        switchDesciption={switchDesciption}/> 
      }
      
      { params.service === '' && <CreateWebsite switchDesciption={switchDesciption}/> }




    <Footer
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupOpened={props.isPopupOpened}
    setIsPopupOpened={props.setIsPopupOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
    </>
  );
}

export default ServiceDetails;