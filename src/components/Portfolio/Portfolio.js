import React, { useRef, useEffect, useState } from 'react';
import './Portfolio.css';
import Isotope from "isotope-layout";
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import Cooperation from '../Cooperation/Cooperation';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Footer from '../Footer/Footer';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function Portfolio(props) {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio__list", {
      itemSelector: ".portfolio__item",
      //    layoutMode: "fitRows",
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 30,
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
  }, [props.portfoliosData]);


  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "portfolio__filter-item_active" : "");

  return (
    <>
    <HelmetProvider><Helmet>
      <title>{`Примеры наших работ | Creative Empire — премиальная веб-студия креативного дизайна`}</title>
      <meta name="description" content="Посмотрите примеры наших работы. Здесь собраны самые лучшие проекты: разработка сайта под ключ, создание UX/UI-дизайна, креативный дизайн и др. Creative Empire — премиальная веб-студия креативного дизайна." />

      <meta property="og:title" content="Примеры наших работ | Creative Empire — премиальная веб-студия креативного дизайна" />
      <meta property="og:site_name" content="creativempire.ru" />
      <meta property="og:url" content="https://creativempire.ru/portfolio" />
      <meta property="og:description" content="Посмотрите примеры наших работы. Здесь собраны самые лучшие проекты: разработка сайта под ключ, создание UX/UI-дизайна, креативный дизайн и др. Creative Empire — премиальная веб-студия креативного дизайна." />
    </Helmet></HelmetProvider>
    <Header
    innerWidth={props.innerWidth}
    stickyHeader={props.stickyHeader}
    isProcessing={props.isProcessing}
    setIsProcessing={props.setIsProcessing}
    isPopupWithFormOpened={props.isPopupWithFormOpened}
    setIsPopupWithFormOpened={props.setIsPopupWithFormOpened}
    infoData={props.infoData}
    setInfoData={props.setInfoData}
    />
    <PageBanner
      header="Портфолио"
    />
    <Cooperation />
    <main className='portfolio'>
      <div className='portfolio__container'>
        <div className='portfolio__header mb-15'>
          <div className='section__header'>
            <h3 className='section__title first-color'>••• Завершенные проекты •••</h3>
            <h2 className='section__subtitle'>Наши лучшие кейсы</h2>
          </div>
        
          <div className='portfolio__filter'>
            <ul className="portfolio__filter-list wow fadeInUp delay-0-4s">
              <li
                data-filter="*"
                className={`portfolio__filter-item ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                Все
              </li>
              <li
                data-filter=".website"
                className={`portfolio__filter-item ${activeBtn("website")}`}
                onClick={handleFilterKeyChange("website")}
              >
                Веб-сайты
              </li>
              <li
                data-filter=".uxui"
                className={`portfolio__filter-item ${activeBtn("uxui")}`}
                onClick={handleFilterKeyChange("uxui")}
              >
                UX/UI дизайн
              </li>
              <li
                data-filter=".creative"
                className={`portfolio__filter-item ${activeBtn("creative")}`}
                onClick={handleFilterKeyChange("creative")}
              >
                Креативный дизайн
              </li>
              {/* <li
                data-filter=".branding"
                className={`portfolio__filter-item ${activeBtn("branding")}`}
                onClick={handleFilterKeyChange("branding")}
              >
                Брендирование
              </li>
              <li
                data-filter=".logos"
                className={`portfolio__filter-item ${activeBtn("logos")}`}
                onClick={handleFilterKeyChange("logos")}
              >
                Логотипы
              </li> */}
            </ul>
          </div>

        </div>

        <div className='portfolio__grid mt-30'>

          <div className='portfolio__list'>
          {props.portfoliosData.length > 0 ?
          props.portfoliosData.map((portfolio) => (<PortfolioItem key={portfolio._id} {...portfolio}/>)) : 'Упс, что-то пошло не так. Мы уже исправляем проблему!'}
          </div>

        </div>
      </div>
    </main>
    <PlaceMagic />
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

export default Portfolio;