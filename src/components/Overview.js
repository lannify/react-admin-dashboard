import React from 'react';
import HCard from './HCard';

class Overview extends React.Component {

  render() {
    return (
      <section className='overview'>
        <div className='row'>
          <div className='col-sm-3'>
            <HCard iconName='users' backgroundColor='tealBG' label='users' number={42356} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='tags' backgroundColor='pinkBG' label='products' number={1256} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='shopping-cart' backgroundColor='amberBG' label='revenue' number={178356} prefix='$' />
          </div>
          <div className='col-sm-3 '>
            <HCard iconName='bar-chart' backgroundColor='cyanBG' label='goal' number={85} suffix='%' />
          </div>
        </div>
      </section>
    )
  }
}

export default Overview;