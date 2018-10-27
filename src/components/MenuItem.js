import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export default class MenuItem extends React.Component {
  state = { open: false };

  renderItem() {
    let classes = this.state.open ? 'menuItem open' : 'menuItem';

    return(
      <ul className={classes}>
        {this.props.children}
      </ul>
    );
  }

  render() {
    if (this.props.children) {
      return(
        <li>
          
        </li>
      );
    } else {
      return(
        <li className='menuItem'>
          <Link to={this.props.link}>
            <FontAwesome  className='menu-icon' name={this.props.iconName} />
            <span className='linkText'>{this.props.linkText}</span>
          </Link>
        </li>
      );
    }
    
  }
}