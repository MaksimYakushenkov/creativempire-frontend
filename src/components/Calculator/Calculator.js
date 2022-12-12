import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import PlaceMagic from '../PlaceMagic/PlaceMagic';
import Footer from '../Footer/Footer';
import './Calculator.css';

import iconWebsite from '../../assets/images/icons/website.png';
import iconUi from '../../assets/images/icons/ui.png';
import iconCreat from '../../assets/images/icons/creat.png';
import iconAdv from '../../assets/images/icons/adv.png';
import iconBrand from '../../assets/images/icons/brand.png';
import iconLogo from '../../assets/images/icons/logo.png';
import iconCancel from '../../assets/images/icons/cancel.png';
import iconCheck from '../../assets/images/icons/check.png';
import iconSimple from '../../assets/images/icons/simple.png';
import iconHard from '../../assets/images/icons/hard.png';
import iconIndividual from '../../assets/images/icons/management.png';
import iconWordpress from '../../assets/images/icons/wordpress.png';
import iconSite from '../../assets/images/icons/site.png';
import iconApp from '../../assets/images/icons/app.png';
import iconSiteApp from '../../assets/images/icons/site-app.png';
import iconVideo from '../../assets/images/icons/video.png';
import iconMarketplace from '../../assets/images/icons/marketplace.png';
import iconSoc from '../../assets/images/icons/soc.png';
import iconYoutube from '../../assets/images/icons/youtube.png';
import iconBannerSoc from '../../assets/images/icons/bannerSoc.png';

import iconLoading from '../../assets/images/icons/loading.png';
import validation from '../Validation/Validation';
import Popup from '../Popup/Popup';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import publicKey from '../../utils/emailJS/emailJS-config';
import emailjs from '@emailjs/browser';
import Form from '../Form/Form';

import { HelmetProvider, Helmet } from 'react-helmet-async';



function Calculator(props) {
  const [price, setPrice] = React.useState(0);
  const [numStep, setNumStep] = React.useState(0);
  const [choosedProduct, setChoosedProduct] = React.useState('website');
  const [productPrice, setProductPrice] = React.useState(0);
  const [choosedPremiumDesign, setChoosedPremiumDesign] = React.useState(false);
  const [premiumDesign, setPremiumDesign] = React.useState(0);
  const [slideVisibleList, setSlideVisibleList] = React.useState([]);
  const [choosedProductText, setChoosedProductText] = React.useState('Одностраничный сайт (лендинг)');

  const [isCalculatorPopupOpened, setIsCalculatorPopupOpened] = React.useState(false);

  const blockList = {
    website: [
      'product',
      'premium-design',
      'website-product',
      'need-logo',
      'need-cms',
    ],
    ux: [
      'product',
      'premium-design',
      'ux-place',
    ],
    creative: [
      'product',
      'premium-design',
      'creative-product',
    ],
    adv: [
      'product',
      'premium-design',
    ],
    brand: [
      'product',
      'premium-design',
    ],
    logo: [
      'product',
      'premium-design',
    ]
  };
  const [steps, setSteps] = React.useState(blockList.website.length);

  React.useEffect(() => {
  const slideList = Array.from(document.querySelectorAll('.calculator__slide'));
    slideList.map((slide) => {
      slide.classList.add('slide__hidden');
    });
    
    slideList[numStep].classList.remove('slide__hidden');

  }, [numStep, choosedProduct]);


  React.useEffect(() => {
    calculateSum(blockList[choosedProduct]);
    choosedProduct === 'website' && setChoosedProductText('Одностраничный сайт (лендинг)');
    choosedProduct === 'ux' && setChoosedProductText('UX/UI дизайн');
    choosedProduct === 'creative' && setChoosedProductText('Креативный дизайн');
    choosedProduct === 'adv' && setChoosedProductText('Рекламный баннер');
    choosedProduct === 'brand' && setChoosedProductText('Брендирование');
    choosedProduct === 'logo' && setChoosedProductText('Логотип');
  }, [choosedProduct]);


  function slideNext() {
    setNumStep(numStep +1);
    
  }

  function slidePrev() {
    setNumStep(numStep-1)
  }

  function calculateSum(fields) {
    let allprice = 0;
    fields.map((input) => {
      allprice += (Number(document.querySelector(`input[name=${input}]:checked`).dataset.price));
    })
    setPrice(allprice);
  }

  function changeRadioActive(e) {
    const radioList =  Array.from(e.parentElement.querySelectorAll('.calculator__radio'));
    radioList.map((input) => {
      if(input.classList.contains('calculator__radio_active')) {
        input.classList.remove('calculator__radio_active');
      }
    })
  }

  function radioChecked(e) {
    changeRadioActive(e.currentTarget);
    const input = e.currentTarget.querySelector('.calculator__input');
    input.checked = true;
    e.currentTarget.classList.add("calculator__radio_active");
    const inputWebsite = document.querySelector(`input[name=${input.name}]:checked`);
    if(e.currentTarget.parentElement.classList.contains('product')) {
      setChoosedProduct(inputWebsite.value);
      setSteps(blockList[input.value].length);
    }
    if(e.currentTarget.parentElement.classList.contains('premium-design')) {
      setPremiumDesign(inputWebsite.dataset.price);
    }
    calculateSum(blockList[choosedProduct]);
  }

  return (
    <>
    <HelmetProvider><Helmet>
      <title>{`Рассчитать стоимость услуг онлайн | Creative Empire — премиальная веб-студия креативного дизайна`}</title>
      <meta name="description" content="Рассчитайте стоимость услуг онлайн на нашем сайте. Вы можете узнать сколько стоит: разработка сайта под ключ, создание UX/UI-дизайна, креативный дизайн и др. Creative Empire — премиальная веб-студия креативного дизайна." />
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
        header="Калькулятор"
    />
    <main className='calculator'>
    <div className='section__header wow fadeInLeft delay-0-2s'>
          <h3 className='section__title first-color'>••• Быстрый результат •••</h3>
          <h2 className='section__subtitle'>Посчитайте <span className="text-color-animation">индивидуальную стоимость</span> вашего проекта</h2>
        </div>

      <div className='calculator__container pt-120'>

        <div className='calculator__slide-container wow fadeInLeft delay-0-4s'>

{/* first */}
        <div className='calculator__slide'>

          <div className='calculator__header fadeInUp delay-0-2s'>
            <h2>Какую услугу хотите заказать?</h2>
          </div>

          <div className='calculator__block product'>

            <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
              <input id="website" className="calculator__input" name="product" type="radio" defaultChecked  value="website" data-price={20000}/>
                <div className='calculator__radio-container'>
                  <div className='calculator__input-image'>
                    <img src={iconWebsite} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                  </div>
                  <h3 className='calculator__radio-header'>Веб-сайт</h3>
                </div>
                {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="ux" className="calculator__input" name="product" type="radio"  value="ux" data-price={15000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconUi} alt="Заказать разработку UX/UI дизайна под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>UX/UI дизайн</h3>
              </div>
              {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="creative" className="calculator__input" name="product" type="radio"  value="creative" data-price={2500}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconCreat} alt="Заказать креативный дизайн под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Креатив</h3>
              </div>
              {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="adv" className="calculator__input" name="product" type="radio"  value="adv" data-price={3000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconAdv} alt="Заказать разработку рекламного баннера под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Рекламный баннер</h3>
              </div>
              {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="brand" className="calculator__input" name="product" type="radio"  value="brand" data-price={20000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconBrand} alt="Заказать разработку собственного бренда под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Разработка бренда</h3>
              </div>
              {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="logo" className="calculator__input" name="product" type="radio"  value="logo" data-price={4000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconLogo} alt="Заказать разработку логотипа под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Разработка логотипа</h3>
              </div>
                {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
            </div>

          </div>

        </div>

                {/* WEbsite-product */}
                {choosedProduct === "website" && 
                <div className='calculator__slide'>

                  <div className='calculator__header  fadeInUp delay-0-2s'>
                    <h2>Какой тип сайта вам необходим?</h2>
                  </div>

                  <div className='calculator__block fadeInUp delay-0-4s website-product'>

                    <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
                      <input id="onepage" className="calculator__input" name="website-product" type="radio" defaultChecked  value="onepage" data-price={0}/>
                        <div className='calculator__radio-container'>
                          <div className='calculator__input-image'>
                            <img src={iconWebsite} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                          </div>
                          <h3 className='calculator__radio-header'>Landing Page</h3>
                        </div>
                        {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
                    </div>

                    <div className='calculator__radio' onClick={radioChecked}>
                      <input id="shop" className="calculator__input" name="website-product" type="radio"  value="shop" data-price={35000}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconUi} alt="Заказать разработку UX/UI дизайна под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Интернет-магазин</h3>
                      </div>
                      {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
                    </div>

                    <div className='calculator__radio' onClick={radioChecked}>
                      <input id="corporate" className="calculator__input" name="website-product" type="radio"  value="corporate" data-price={80000}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconCreat} alt="Заказать креативный дизайн под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Корпоративный сайт</h3>
                      </div>
                      {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
                    </div>

                    <div className='calculator__radio' onClick={radioChecked}>
                      <input id="portal" className="calculator__input" name="website-product" type="radio"  value="portal" data-price={200000}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconAdv} alt="Заказать разработку рекламного баннера под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Портал</h3>
                      </div>
                      {/* <p className='calculator__radio-description'>Нужно ли краткое описание</p> */}
                    </div>

                  </div>

                </div>
        }

{/* premium-design */}

                <div className='calculator__slide'>
                  <div className='calculator__header  fadeInUp delay-0-2s'>
                      <h2>Нужен ли премиальный дизайн?</h2>
                  </div>
                  <div className='calculator__block fadeInUp delay-0-4s jc-c premium-design'>
                  <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
                      <input className="calculator__input" name="premium-design" type="radio"  value="no" defaultChecked data-price={0}/>
                        <div className='calculator__radio-container'>
                          <div className='calculator__input-image'>
                            <img src={iconCancel} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                          </div>
                          <h3 className='calculator__radio-header'>Не нужен</h3>
                        </div>
                    </div>
                    <div className='calculator__radio' onClick={radioChecked}>
                      <input className="calculator__input" name="premium-design" type="radio"   value="yes" data-price={3000}/>
                        <div className='calculator__radio-container'>
                          <div className='calculator__input-image'>
                            <img src={iconCheck} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                          </div>
                          <h3 className='calculator__radio-header'>Нужен</h3>
                        </div>
                    </div>
                  </div>

                </div>


{/* Need-logo */}
{choosedProduct === "website" && 
                <div className='calculator__slide '>
                <div className='calculator__header  fadeInUp delay-0-2s'>
                    <h2>Нужен ли логотип?</h2>
                </div>
                <div className='calculator__block fadeInUp delay-0-4s need-logo'>
                  <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
                    <input className="calculator__input" name="need-logo" type="radio" value="yes" defaultChecked data-price={0}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconCancel} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Нет</h3>
                      </div>
                  </div>
                  <div className='calculator__radio' onClick={radioChecked}>
                    <input className="calculator__input" name="need-logo" type="radio"  value="no" data-price={3000}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconSimple} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Простой логотип</h3>
                      </div>
                  </div>
                  <div className='calculator__radio' onClick={radioChecked}>
                    <input className="calculator__input" name="need-logo" type="radio"  value="no" data-price={10000}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconHard} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Сложный логотип</h3>
                      </div>
                  </div>
                  
                </div>

              </div>
}
{/* Need-CMS */}
{choosedProduct === "website" && 
                <div className='calculator__slide '>
                <div className='calculator__header  fadeInUp delay-0-2s'>
                    <h2>Будет ли CMS?</h2>
                    <p>CMS - это система для удобного управления сайтом, другими словами - личный кабинет владельца.</p>
                </div>
                <div className='calculator__block fadeInUp delay-0-4s need-cms'>
                  <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
                    <input className="calculator__input" name="need-cms" type="radio" value="yes" defaultChecked data-price={0}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconCancel} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Нет</h3>
                      </div>
                  </div>
                  <div className='calculator__radio' onClick={radioChecked}>
                    <input className="calculator__input" name="need-cms" type="radio"  value="no" data-price={5000}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconWordpress} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>WordPress</h3>
                      </div>
                  </div>
                  <div className='calculator__radio' onClick={radioChecked}>
                    <input className="calculator__input" name="need-cms" type="radio"  value="no" data-price={20000}/>
                      <div className='calculator__radio-container'>
                        <div className='calculator__input-image'>
                          <img src={iconIndividual} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                        </div>
                        <h3 className='calculator__radio-header'>Индивидуальная</h3>
                      </div>
                  </div>
                  
                </div>

              </div>
}

{/* UX-place */}
{choosedProduct === "ux" && 
  <div className='calculator__slide '>
  <div className='calculator__header  fadeInUp delay-0-2s'>
      <h2>Для чего нужен UX/UI дизайн?</h2>
  </div>
  <div className='calculator__block fadeInUp delay-0-4s ux-place'>
    <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
      <input className="calculator__input" name="ux-place" type="radio" defaultChecked value="yes" data-price={0}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconSite} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Сайт</h3>
        </div>
    </div>
    <div className='calculator__radio' onClick={radioChecked}>
      <input className="calculator__input" name="ux-place" type="radio"  value="no" data-price={5000}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconApp} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Приложение</h3>
        </div>
    </div>
    <div className='calculator__radio' onClick={radioChecked}>
      <input className="calculator__input" name="ux-place" type="radio"  value="no" data-price={30000}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconSiteApp} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Сайт и приложение</h3>
        </div>
    </div>
    
  </div>

</div>
}

{/* Creative-product */}
{choosedProduct === "creative" && 
  <div className='calculator__slide '>
  <div className='calculator__header  fadeInUp delay-0-2s'>
      <h2>Какую услугу хотите?</h2>
  </div>
  <div className='calculator__block fadeInUp delay-0-4s creative-product'>
    <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
      <input className="calculator__input" name="creative-product" type="radio" defaultChecked value="yes" data-price={1000}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconSite} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Баннер на сайт</h3>
        </div>
    </div>
    <div className='calculator__radio' onClick={radioChecked}>
      <input className="calculator__input" name="creative-product" type="radio"  value="no" data-price={500}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconBannerSoc} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Баннер в соцсетях</h3>
        </div>
    </div>
    <div className='calculator__radio' onClick={radioChecked}>
      <input className="calculator__input" name="creative-product" type="radio"  value="no" data-price={2500}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconYoutube} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Видеохостинги</h3>
        </div>
    </div>
    <div className='calculator__radio' onClick={radioChecked}>
      <input className="calculator__input" name="creative-product" type="radio"  value="no" data-price={12500}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconSoc} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Соцсети</h3>
        </div>
    </div>
    <div className='calculator__radio' onClick={radioChecked}>
      <input className="calculator__input" name="creative-product" type="radio"  value="no" data-price={2500}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconMarketplace} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Маркетплейсы</h3>
        </div>
    </div>
    <div className='calculator__radio' onClick={radioChecked}>
      <input className="calculator__input" name="creative-product" type="radio"  value="no" data-price={5000}/>
        <div className='calculator__radio-container'>
          <div className='calculator__input-image'>
            <img src={iconVideo} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
          </div>
          <h3 className='calculator__radio-header'>Видео и анимация</h3>
        </div>
    </div>
    
  </div>

</div>
}





          <div className='calculator__slide'>
            <div className='calculator__header  fadeInUp delay-0-2s'>
              <h2>Поздравляем! Расчет окончен.</h2>
              <div className='answer__image' ></div>
            </div>
            <div className='calculator__block ai-c fd-r fadeInUp delay-0-4s answer'>
              <h3><span>{choosedProductText}</span> – это всегда индивидуальный проект. Будет лучше, если мы свяжемся с вами и обсудим все подробно. Таким образом мы сможем точно оценить стоимость работы и сориентировать вас по срокам.</h3>
              
            </div>
          </div>

        <div className='calculator__button-container'>
          <button className='calculator__button calculator__button_prev' onClick={slidePrev} disabled={numStep <= 0} >Назад</button>
          {!(numStep >= steps) && <button className='calculator__button' onClick={slideNext} disabled={numStep >= steps + 1}>Далее</button>}
        </div>
        

        </div>









        <div className='calculator__price-area wow fadeInRight delay-0-6s'>
          <div className='price__area'>
            <h3 className='price__header'>Ориентировочная стоимость:</h3>
            <span className='calculator__price'>{price}</span>
          </div>
          <Form
            isProcessing={props.isProcessing}
            setIsProcessing={props.setIsProcessing}
            isPopupOpened={isCalculatorPopupOpened}
            setIsPopupOpened={setIsCalculatorPopupOpened}
            infoData={props.infoData}
            setInfoData={props.setInfoData}
          />
            
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

export default Calculator;