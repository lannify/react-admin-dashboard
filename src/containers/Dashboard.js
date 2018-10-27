import React from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Main from './Main';
import Profile from './Profile';
import Products from './Products';
import Shop from './Shop';
import Customers from './Customers';
import Orders from './Orders';
import Analytics from './Analytics';
import Settings from './Settings';

const Dashboard = () => 
  <div className='fluid-container'>
    <div className='row'>
      <div className='aside col-md-2 col-sm-3 sidebarMenu'>
        <Menu />
      </div>
      <div className='main col-md-10'>       
        <div className='fluid-container'>
          <Route exact path='/' component={Main} />
          <Route path='/profile' component={Profile} />
          <Route path='/products' component={Products} />
          <Route path='/shop' component={Shop} />
          <Route path='/customers' component={Customers} />
          <Route path='/orders' component={Orders} />
          <Route path='/analytics' component={Analytics} />
          <Route path='/settings' component={Settings} />
        </div>
      </div> 
    </div> 
  </div>;

export default Dashboard;