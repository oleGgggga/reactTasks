import React, { Fragment } from 'react';
function withRainbowFrame(colors) {
    return function(Comp) {
        return function (props){
        let ColorFrame=<Comp {...props}/>;
        colors.forEach(element => {
        ColorFrame=<div style={{border:"solid", borderColor: `${element}`, padding:"10px"}}>{ColorFrame}</div>;
        });
        return <Fragment>{ColorFrame}</Fragment>;
    }
        
               
        
    };
}
export {withRainbowFrame};