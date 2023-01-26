import React from "react";
import PropTypes, { number } from 'prop-types';
import {btnEvents} from './events';
import { EditRow } from "./EditRow";
export class ClientRow extends React.PureComponent{
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.number.isRequired,
            FIO: PropTypes.object.isRequired,
            balance: PropTypes.number.isRequired,
            isActive: PropTypes.bool.isRequired,
            isEdit: PropTypes.bool,
        }),
    };
    edit=()=>{
        btnEvents.emit('editClicked', this.props.data.id)
    }
    del=()=>{
        btnEvents.emit('delClicked', this.props.data.id)
    }
    render(){
        console.log('client row render id:' +`${this.props.data.id}`);
        return(
            !this.props.data.isEdit?
            <tr>
                <td>{this.props.data.FIO.name}</td>
                <td>{this.props.data.FIO.surname}</td>
                <td>{this.props.data.FIO.fatherName}</td>
                <td>{this.props.data.balance}</td>
                <td>{this.props.data.isActive?'активный':'заблокирован'}</td>
                <td><button disabled={!!this.props.data.isDisable?"disabled" :""} onClick={this.edit}>редактировать</button></td>
                <td><button disabled={!!this.props.data.isDisable?"disabled" :""} onClick={this.del}>удалить</button></td>
            </tr>:
            <EditRow data={this.props.data}/>
                
        )
    }
}