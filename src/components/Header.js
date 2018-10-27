import React from 'react';
import AccountMenu from './AccountMenu'; 

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>{this.props.pageTitle}</h1>
        <nav className='headerNav pullRight'>
          <AccountMenu />
        </nav>
      </div>
      
    );
  }
}

export default Header;