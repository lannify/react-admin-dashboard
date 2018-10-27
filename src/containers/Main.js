import React from 'react';

import Header from '../components/Header';
import Overview from '../components/Overview';
import GraphSection from '../components/GraphSection';
import LatestSection from '../components/LatestSection';

class Main extends React.Component {
  render()  {
    return (  
      <div>
        <Header pageTitle='Dashboard'/>
        <Overview />
        <GraphSection />
        <LatestSection /> 
      </div>
    );
  }
}

export default Main;