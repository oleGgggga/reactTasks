import React from 'react';
import ReactDOM from 'react-dom';
import CBR2JSX from './components/BR2JSX';
const text="первый<br>второй<br/>третий<br />последний";
ReactDOM.render(
  <CBR2JSX text={text}/>,document.getElementById('container') 
);

