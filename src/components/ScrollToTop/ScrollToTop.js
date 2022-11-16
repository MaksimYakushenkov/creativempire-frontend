import React, { Component } from "react";

export default class ScrollToTop extends Component {

ScrollToTopFunction() {
  const element = document.querySelector('.home');
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

  render() {
    
    
    return (
      <div className={`scroll-to-top ${this.props.scrollToTopHidden ? 'scroll__hidden' : ''}`} onClick={this.ScrollToTopFunction}></div>
    );
  }
}