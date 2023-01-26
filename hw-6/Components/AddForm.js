import React from "react";
import {btnEvents} from './events';
export class Form extends React.PureComponent{
    nameRef=React.createRef();
    surnameRef=React.createRef();
    fatherNameRef=React.createRef();
    balanceRef=React.createRef();
    selectRef=React.createRef();
    handlerSubmit=(eo)=>{
        eo.preventDefault();
        const newClentObj={
          id: Math.random(),
          FIO:{
            surname: this.surnameRef.current.value,
            name: this.nameRef.current.value,
            fatherName: this.fatherNameRef.current.value,
          },
          balance: +this.balanceRef.current.value,
          isActive: JSON.parse(this.selectRef.current.value),
        }
        btnEvents.emit('newClient', newClentObj);
    }

    render(){
      console.log('add form render');
        return(
          <form onSubmit={this.handlerSubmit}>
            <label>имя</label>
            <input type='text' name='name' ref={this.nameRef}/>
            <label>фамилия</label>
            <input type='text' name='surname' ref={this.surnameRef}/>
            <label>отчество</label>
            <input type='text' name='fathername' ref={this.fatherNameRef}/>
            <label>баланс</label>
            <input type='number' name='balnce' ref={this.balanceRef}/>
            <label>статус</label>
            <select name='isActive' ref={this.selectRef}>
                <option value={true}>активный</option>
                <option value={false}>заблокированый</option>
            </select>
            <button type="sbmit">добавить</button> 
          </form>  
        )
    }
}