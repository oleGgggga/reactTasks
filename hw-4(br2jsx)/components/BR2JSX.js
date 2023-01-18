import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  state={
    lines:'',
  }
  key=1;
  componentDidMount(){
    let lines = this.props.text.split(/\<br\s?\/?\>/g);
    lines=lines.map((elem)=>{return <div key={this.key++}>{elem}</div>})
    this.setState({lines: lines})
  }
  render() {
    
    return this.state.lines
  }

}

export default BR2JSX;
