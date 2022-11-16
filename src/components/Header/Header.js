import React from 'react';
import Menu from '../Menu/Menu';

function Header(props) {
  
  return (
    <header className={`header ${props.stickyHeader ? 'header__sticky' : ''}`}>
      <Menu />
    </header> 
  );
}

export default Header;