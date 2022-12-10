import React from 'react';
import './PageWithText.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageBanner from '../PageBanner/PageBanner';


function PageWithText(props) {

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
    setInfoData={props.setInfoData} />
    <PageBanner
    header={props.header}
    />
    <main className='page-with-text'>
      {props.children}
    </main>
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

export default PageWithText;