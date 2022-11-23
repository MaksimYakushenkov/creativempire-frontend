import React, { useRef, useEffect, useState } from 'react';
import './Portfolio.css';
import Isotope from "isotope-layout";
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import Cooperation from '../Cooperation/Cooperation';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Footer from '../Footer/Footer';
import iconLink from '../../assets/images/icons/link.webp';
import project2 from '../../assets/images/projects/project2.jpg';

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
  }, []);


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
    <Header stickyHeader={props.stickyHeader} />
    <PageBanner
        header="Портфолио"
    />
    <Cooperation />
    <main className='portfolio pt-60 pb-60'>
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
              <li
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
              </li>
            </ul>
          </div>

        </div>

        <div className='portfolio__grid mt-30'>

          <div className='portfolio__list'>
            <div className='portfolio__item wow fadeInUp delay-0-4s website'>
              <img className='portfolio__image' src={project2} />
              <div className='portfolio__description'>
                <a className='portfolio__title' target='_blank' href='ya.ru'>Посадочная страница таролога</a>
                <p className='portfolio__subtitle'>Веб-разработка</p>
              </div>
              <div className='portfolio__hover-container'>
                <a className='portfolio__hover-link' target='_blank' href='ya.ru'><img className='portfolio__hover-image' src={iconLink} /></a>
              </div>
            </div>
            <div className='portfolio__item wow fadeInUp delay-0-4s uxui'>
              <img className='portfolio__image' src={project2} />
              <div className='portfolio__description'>
                <a className='portfolio__title' target='_blank' href='ya.ru'>Посадочная страница таролога</a>
                <p className='portfolio__subtitle'>Веб-разработка</p>
              </div>
              <div className='portfolio__hover-container'>
                <a className='portfolio__hover-link' target='_blank' href='ya.ru'><img className='portfolio__hover-image' src={iconLink} /></a>
              </div>
            </div>
            <div className='portfolio__item wow fadeInUp delay-0-4s creative'>
              <img className='portfolio__image' src={project2} />
              <div className='portfolio__description'>
                <a className='portfolio__title' target='_blank' href='ya.ru'>Посадочная страница таролога</a>
                <p className='portfolio__subtitle'>Веб-разработка</p>
              </div>
              <div className='portfolio__hover-container'>
                <a className='portfolio__hover-link' target='_blank' href='ya.ru'><img className='portfolio__hover-image' src={iconLink} /></a>
              </div>
            </div>
            <div className='portfolio__item wow fadeInUp delay-0-4s website'>
              <img className='portfolio__image' src={project2} />
              <div className='portfolio__description'>
                <a className='portfolio__title' target='_blank' href='ya.ru'>Посадочная страница таролога</a>
                <p className='portfolio__subtitle'>Веб-разработка</p>
              </div>
              <div className='portfolio__hover-container'>
                <a className='portfolio__hover-link' target='_blank' href='ya.ru'><img className='portfolio__hover-image' src={iconLink} /></a>
              </div>
            </div>
            <div className='portfolio__item wow fadeInUp delay-0-4s uxui'>
              <img className='portfolio__image' src={project2} />
              <div className='portfolio__description'>
                <a className='portfolio__title' target='_blank' href='ya.ru'>Посадочная страница таролога</a>
                <p className='portfolio__subtitle'>Веб-разработка</p>
              </div>
              <div className='portfolio__hover-container'>
                <a className='portfolio__hover-link' target='_blank' href='ya.ru'><img className='portfolio__hover-image' src={iconLink} /></a>
              </div>
            </div>
            <div className='portfolio__item wow fadeInUp delay-0-4s creative'>
              <img className='portfolio__image' src={project2} />
              <div className='portfolio__description'>
                <a className='portfolio__title' target='_blank' href='ya.ru'>Посадочная страница таролога</a>
                <p className='portfolio__subtitle'>Веб-разработка</p>
              </div>
              <div className='portfolio__hover-container'>
                <a className='portfolio__hover-link' target='_blank' href='ya.ru'><img className='portfolio__hover-image' src={iconLink} /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
    <PlaceMagic />
    <Footer />
    </>
  );
}

export default Portfolio;