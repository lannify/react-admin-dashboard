import React from 'react';
import FontAwesome from 'react-fontawesome';
import CountTo from 'react-count-to';

export default class HCard extends React.Component {
  render() {
    let iconClass = `iconWrapper ${this.props.backgroundColor}`;
    return(
      <div className='hCard card'>
        <div className={iconClass}>
          <FontAwesome name={this.props.iconName} size='3x' />
        </div>
        <div className='dataWrapper text-light'>
          <p className='number'>{this.props.prefix}<CountTo to={this.props.number} speed={1000} />{this.props.suffix}</p>
          <p className='label'>{this.props.label}</p>
        </div>
      </div>
    );
  }
}