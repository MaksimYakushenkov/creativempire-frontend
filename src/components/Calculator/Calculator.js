import React, { useState, useEffect } from 'react';
import './Calculator.css';
import iconWebsite from '../../assets/images/icons/website.png';
import iconUi from '../../assets/images/icons/ui.png';
import iconCreat from '../../assets/images/icons/creat.png';
import iconAdv from '../../assets/images/icons/adv.png';
import iconBrand from '../../assets/images/icons/brand.png';
import iconLogo from '../../assets/images/icons/logo.png';

function Calculator(props) {
  const [price, setPrice] = React.useState(0);
  const [productPrice, setProductPrice] = React.useState(0);
  const [choosedProduct, setChoosedProduct] = React.useState('website');

  React.useEffect(() => {
    const orderPrice = 0 + Number(productPrice);
    setPrice(orderPrice);
  }, [productPrice]);

  React.useEffect(() => {
    console.log(price)
  }, [price]);

  React.useEffect(() => {
    console.log(choosedProduct)
  }, [choosedProduct]);

  function changeRadioActive() {
    const radioList =  Array.from(document.querySelectorAll('.calculator__radio'));
    radioList.map((input) => {
      if(input.classList.contains('calculator__radio_active')) {
        input.classList.remove('calculator__radio_active');
      }
    })
  }

  function radioChecked(e) {
    changeRadioActive();
    const input = e.currentTarget.querySelector('.calculator__input');
    input.checked = true;
    e.currentTarget.classList.add("calculator__radio_active");
    const inputWebsite = document.querySelector('input[name=product]:checked');
    setChoosedProduct(inputWebsite.value);
    setProductPrice(inputWebsite.dataset.price);
  }

  return (
    <section className='calculator'>

      <div className='calculator__container'>
        <div className='calculator__container-slide'>

          <div className='calculator__header'>
            <h2>Посчитайте индивидуальную стоимость вашего сайта</h2>
          </div>

          <div className='calculator__block'>

            <div className='calculator__radio calculator__radio_active' onClick={radioChecked}>
              <input id="website" className="calculator__input" name="product" type="radio"  value="website" data-price={20000}/>
                <div className='calculator__radio-container'>
                  <div className='calculator__input-image'>
                    <img src={iconWebsite} alt="Заказать разработку сайта под ключ в Москве в студии Creative Empire" />
                  </div>
                  <h3 className='calculator__radio-header'>Веб-сайт</h3>
                </div>
                <p className='calculator__radio-description'>Нужно ли краткое описание</p>
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="ux" className="calculator__input" name="product" type="radio"  value="ux" data-price={15000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconUi} alt="Заказать разработку UX/UI дизайна под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>UX/UI дизайн</h3>
              </div>
              <p className='calculator__radio-description'>Нужно ли краткое описание</p>
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="creative" className="calculator__input" name="product" type="radio"  value="creative" data-price={2500}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconCreat} alt="Заказать креативный дизайн под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Креатив</h3>
              </div>
              <p className='calculator__radio-description'>Нужно ли краткое описание</p>
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="adv" className="calculator__input" name="product" type="radio"  value="adv" data-price={3000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconAdv} alt="Заказать разработку рекламного баннера под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Рекламный баннер</h3>
              </div>
              <p className='calculator__radio-description'>Нужно ли краткое описание</p>
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="brand" className="calculator__input" name="product" type="radio"  value="brand" data-price={20000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconBrand} alt="Заказать разработку собственного бренда под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Разработка бренда</h3>
              </div>
              <p className='calculator__radio-description'>Нужно ли краткое описание</p>
            </div>

            <div className='calculator__radio' onClick={radioChecked}>
              <input id="logo" className="calculator__input" name="product" type="radio"  value="logo" data-price={4000}/>
              <div className='calculator__radio-container'>
                <div className='calculator__input-image'>
                  <img src={iconLogo} alt="Заказать разработку логотипа под ключ в Москве в студии Creative Empire" />
                </div>
                <h3 className='calculator__radio-header'>Разработка логотипа</h3>
              </div>
                <p className='calculator__radio-description'>Нужно ли краткое описание</p>
            </div>

          </div>

        </div>

        <div className='calculator__price'>

        </div>

      </div>


    </section>
  );
}

export default Calculator;