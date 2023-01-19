import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './DoubleButton.css';

class DoubleButton extends React.Component {

  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
  };
  btnClick=(eo)=>{
    this.props.cbPressed(eo.target.name);
  }
  render() {
    return (
      <div className='btnWr'><button name='1' onClick={this.btnClick}>{this.props.caption1}</button>{this.props.children}<button name='2' onClick={this.btnClick}>{this.props.caption2}</button></div>
    )
  }

}

export default DoubleButton;
