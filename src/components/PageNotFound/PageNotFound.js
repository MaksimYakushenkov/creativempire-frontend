import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PlaceMagic from '../PlaceMagic/PlaceMagic';

class PageNotFound extends React.Component {

  render(){
    return(
      <>
      <HelmetProvider><Helmet>
      <title>404 — Страница не найдена! | Creative Empire — премиальная веб-студия креативного дизайна</title>
      <meta name="description" content="Вернитесь на предыдущую страницу или перейдите на главную." />
      </Helmet></HelmetProvider>
      <Header 
      stickyHeader={this.props.stickyHeader}
      innerWidth={this.props.innerWidth} 
      isProcessing={this.props.isProcessing}
      setIsProcessing={this.props.setIsProcessing}
      isPopupWithFormOpened={this.props.isPopupWithFormOpened}
      setIsPopupWithFormOpened={this.props.setIsPopupWithFormOpened}
      infoData={this.props.infoData}
      setInfoData={this.props.setInfoData}
      />
      <section className='not-found'>
        <h1 className='not-found__title wow fadeInUp delay-0-2s'>Страница не найдена!</h1>
        <p className='wow fadeInUp delay-0-6s'>Вернитесь на предыдущую страницу или перейдите на <Link to="/">главную</Link>!</p>
      </section>
      <PlaceMagic />
      <Footer
      isProcessing={this.props.isProcessing}
      setIsProcessing={this.props.setIsProcessing}
      isPopupOpened={this.props.isPopupOpened}
      setIsPopupOpened={this.props.setIsPopupOpened}
      infoData={this.props.infoData}
      setInfoData={this.props.setInfoData}
      />
      </>
    )
  }
}

export default PageNotFound;