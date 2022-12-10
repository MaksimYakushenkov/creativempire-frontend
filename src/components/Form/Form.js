import React, { Component, createRef } from "react";
import { Link, withRouter } from "react-router-dom";
import validation from '../Validation/Validation';
import emailjs from '@emailjs/browser';
import Popup from "../Popup/Popup";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import iconLoading from '../../assets/images/icons/loading.png';
import publicKey from '../../utils/emailJS/emailJS-config';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      phone: '',
      phoneValid: false,
      formValid: false,
    }
    this.validation = validation;
    this.form = createRef();
    this.setInfoData = props.setInfoData;
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.callBack = this.callBack.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  isFormValid() {
    this.setState({
      formValid: this.state.phoneValid
  });
  }

  closePopup() {
    this.props.setIsPopupOpened(false);
  }

  resetForm() {
    this.setState({
      phone: '',
      formValid: false,
    })
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({
      phone: value,
      phoneValid :  this.validation.validateInput(e.target)
    }, this.isFormValid)
  }

  sendEmail(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    this.props.setIsProcessing(true);
    emailjs.sendForm('creativempire', e.currentTarget.dataset.templateId, this.form.current, publicKey)
    .then((result) => {
        this.props.setIsProcessing(false);
        this.props.setInfoData({
          img: "ok",
          text: "Сообщение отправлено. Ожидайте скорого звонка!",
        })
        this.props.setIsPopupOpened(true);
        this.resetForm();
    }, (error) => {
        this.props.setIsProcessing(false);
        this.props.setInfoData({
          img: "error",
          text: "Произошла ошибка. Попробуйте повторить позднее или свяжитесь с нами в соцсетях.",
        })
        console.log(error.text);
        this.props.setIsPopupOpened(true);
    });
  }

  callBack() {
    this.props.setIsPopupSliderOpened(true);
  }

  render(){
    return(
      <>
      <form ref={this.form} onSubmit={this.sendEmail} data-template-id='callback' className="calculator__form" noValidate>
        <div className="contactUs__field">
          <input id="user_phone" className="contactUs__input" onChange={this.handleChange} required name="user_phone" type="text" value={this.state.phone} placeholder="Ваш номер*" />
          <span className="user_phone-error error-message"></span>
        </div>
        <div className='accept-rules'>
          <p className='accept-rules__paragraph'>Нажимая на кнопку вы даете согласие на обработку персональных данных и соглашаетесь с <Link to="/privacy-policy" target="_blank">политикой конфиденциальности</Link>.</p>
        </div>
        <button type="submit" className={`calculator__recall-button ${this.props.isProcessing && 'calculator__recall-button_loading'}`} disabled={!this.state.formValid}>{this.props.isProcessing ? <><img className='submit__loading' src={iconLoading} /></> : <>Обсудить проект</>}</button>
      </form>
      <Popup
        isPopupOpened={this.props.isPopupOpened}
        setIsPopupOpened={this.props.setIsPopupOpened}
        closePopup={this.closePopup}
      >
          <InfoToolTip
            data={this.props.infoData} />
        </Popup>
      </>
    )
  }
}

export default Form;