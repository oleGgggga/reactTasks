import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './ColorFrame.css';

class ColorFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  render() {
    let colorFrame=this.props.children;
    this.props.colors.forEach(element => {
        colorFrame=<div style={{border:"solid", borderColor: `${element}`, padding:"10px"}}>{colorFrame}</div>
    });
    return (
      <Fragment>
        {colorFrame}
      </Fragment>
    )
  }

}

export default ColorFrame;
