import React from 'react';
import ReactDOM from 'react-dom';
import DoubleButton from './components/DoubleButton';
import {withRainbowFrame} from './withRainbowFrame';
let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
ReactDOM.render(
  <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => console.log(num) }>вышел, был сильный</FramedDoubleButton>,document.getElementById('container') 
);

