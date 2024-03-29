import React from 'react';
import './Popup.css';
import iconPopupClose from '../../assets/images/icons/popup_close.svg';

function Popup(props) {

  function closePopup() {
    props.closePopup();
  }

  return (
    <div className={`popup ${props.isPopupOpened && 'popup_opened'}`}>
      <div className='popup__container'>
        {props.children}
      </div>
      <button className='popup__close-button' onClick={closePopup}><img src={iconPopupClose} alt='Закрыть окно' /></button>
    </div>
  );
}

export default Popup;