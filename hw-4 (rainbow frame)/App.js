import React from 'react';
import ReactDOM from 'react-dom';
import ColorFrame from './components/ColorFrame';
const colors=['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
ReactDOM.render(
  <ColorFrame colors={colors}>
    hello!
  </ColorFrame> 
  , document.getElementById('container') 
);

