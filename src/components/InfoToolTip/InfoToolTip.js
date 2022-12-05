import React from 'react';
import './InfoToolTip.css';
import iconInfoOk from '../../assets/images/icons/info_ok.svg';
import iconInfoError from '../../assets/images/icons/info_error.svg';


function InfoToolTip(props) {

  return (
    <div className='info'>
      <div className="info__container">
        <img className="info__image" alt="Информационная картинка" src={props.data.img === 'ok' ? iconInfoOk : iconInfoError} />
        <p className="info__text">{props.data.text}</p>
      </div>
    </div>
  );
}

export default InfoToolTip;
