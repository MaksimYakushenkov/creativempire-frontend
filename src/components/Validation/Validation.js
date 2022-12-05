import React from "react";
import './Validation.css';
import { validationErrors } from "../../utils/validation/validation-errors";
import { regexp } from "../../utils/validation/validation-regexp";

class Validation extends React.Component {

  validateInput(input) {
    const errorContainer = input.parentElement.querySelector(`.${input.name}-error`);
    if(!regexp[input.name].test(input.value)) {
      input.classList.add('error__field');
      errorContainer.classList.add('error_visible');
      errorContainer.textContent = validationErrors[input.name];
      return false
    } else {
      errorContainer.classList.remove('error_visible');
      input.classList.remove('error__field');
      return true
    }
  }
}
const validation = new Validation();


export default validation;