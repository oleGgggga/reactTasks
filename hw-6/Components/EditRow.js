import React from "react";
import PropTypes, { number } from 'prop-types';
import {btnEvents} from './events';
export class EditRow extends React.PureComponent{
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.number.isRequired,
            FIO: PropTypes.object.isRequired,
            balance: PropTypes.number.isRequired,
            isActive: PropTypes.bool.isRequired,
        }),
    };
    state={
        data: this.props.data,
    }
    chencel=()=>{
        btnEvents.emit('chencelEdit', this.props.data.id);
    }
    nameRef=React.createRef();
    surnameRef=React.createRef();
    fatherNameRef=React.createRef();
    balanceRef=React.createRef();
    selectRef=React.createRef();
    editValueSave=()=>{
        const newObj={...this.state.data, isActive:JSON.parse(this.selectRef.current.value), balance:+this.balanceRef.current.value, FIO:{name:this.nameRef.current.value, surname:this.surnameRef.current.value, fatherName:this.fatherNameRef.current.value}};
        delete newObj["isEdit"];
        console.log(newObj);
        btnEvents.emit('savedEditObj', newObj);
    }
    render(){
        console.log('edit row render')
        return(
            <tr>
                <td><input type='text' defaultValue={this.state.data.FIO.name} ref={this.nameRef}/></td>
                <td><input type='text' defaultValue={this.state.data.FIO.surname} ref={this.surnameRef}/></td>
                <td><input type='text' defaultValue={this.state.data.FIO.fatherName} ref={this.fatherNameRef}/></td>
                <td><input type='number' defaultValue={this.state.data.balance} ref={this.balanceRef}/></td>
                <td>
                <select ref={this.selectRef}>
                 <option value={true}>активный</option>
                 <option value={false}>заблокирован</option>    
                </select>
                </td>
                <td><button onClick={this.editValueSave}>сохранить</button></td>
                <td><button onClick={this.chencel}>отменить</button></td>
            </tr>
        )
    }
}