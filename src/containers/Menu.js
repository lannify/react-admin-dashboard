import React from 'react';

import MenuItem from '../components/MenuItem';

class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'>React Admin</h2>
        </div>
        <ul>
          <MenuItem link='/' linkText='Dashboard' iconName='tachometer' />
          <MenuItem link='/profile' linkText='Profile' iconName='cog' />
          <MenuItem link='/shop' linkText='Shop' iconName='shopping-cart' />
          <MenuItem link='/products' linkText='Products' iconName='tags' />
          <MenuItem link='/orders' linkText='Orders' iconName='list' />
          <MenuItem link='/customers' linkText='Customers' iconName='group' />
          <MenuItem link='/analytics' linkText='Analytics' iconName='bar-chart' />
          <MenuItem link='/settings' linkText='Settings' iconName='gear' />
        </ul> 
      </div>
      
    );
  }
}

export default Menu;