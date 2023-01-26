import React, { Fragment } from "react";
import PropTypes, { element } from 'prop-types';
import { ClientRow } from "./Client";
import {btnEvents} from './events';
import { Filtred } from "./Filtred";
import { Form } from "./AddForm";
import '../index.css';
export class MobileCompany extends React.PureComponent{
    static propTypes = {
        data:PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            FIO: PropTypes.object.isRequired,
            balance: PropTypes.number.isRequired,
            isActive: PropTypes.bool.isRequired,
          })
        ),
    };
    state={
      data: this.props.data,
      filtredData: null,
      showActiveList: false, 
      showBlockedList: false,
      showAddForm: false,
    }
    componentDidMount = () => {
      btnEvents.addListener('editClicked',this.editClient);
      btnEvents.addListener('delClicked',this.delClient);
      btnEvents.addListener('chencelEdit', this.editClientChencel);
      btnEvents.addListener('savedEditObj', this.saveEditClient);
      btnEvents.addListener('newClient', this.addClient);
    };
  
    componentWillUnmount = () => {
      btnEvents.removeListener('editClicked',this.editClient);
      btnEvents.removeListener('delClicked', this.delClient);
      btnEvents.removeListener('chencelEdit', this.editClientChencel);
      btnEvents.removeListener('savedEditObj', this.saveEditClient);
      btnEvents.removeListener('newClient', this.addClient);
    };
    editClientChencel=(id)=>{
      const findElem=this.state.data.find(elem=>elem.id===id);
      const editElem={...findElem};
      delete editElem['isEdit'];
      const newArr=this.state.data.map((elem)=>elem.id!==id?elem:editElem);
      this.setState({data:newArr,}); 
    }
    saveEditClient=(obj)=>{
      delete obj['isEdit'];
      const newArr=this.state.data.map((elem)=>elem.id!==obj.id?elem:obj);
      this.setState({data:newArr,});
    }
    editClient=(id)=>{
      const findElem=this.state.data.find(elem=>elem.id===id);
      const editElem={...findElem};
      editElem.isEdit=true;
      const newArr=this.state.data.map((elem)=>elem.id!==id?elem:editElem);
      this.setState({data:newArr,}); 
    }
    delClient=(id)=>{
      const newArr=this.state.data.filter((elem)=>{
        return elem.id !==id;
      });
      this.setState({data: newArr,});
    }
    filterFnc=(eo)=>{
      switch(eo.target.name){
        case 'active':
        if(this.state.showActiveList) return;
        const activeArr=this.state.data.filter(elem=>elem.isActive===true);
        this.setState({filtredData: activeArr, showActiveList: true, showBlockedList: false,});
        break;
        case 'blocked':
        if(this.state.showBlockedList) return;
        const blockedArr=this.state.data.filter(elem=>elem.isActive===false);
        this.setState({filtredData: blockedArr, showActiveList: false, showBlockedList: true,});
        break;
        default:
        this.setState({filtredData: null, showActiveList: false, showBlockedList: false,});
        break;
      }
    }
    addClient=(obj)=>{
      const newArr=[...this.state.data];
      newArr.push(obj);
      this.setState({data: newArr, filtredData: newArr, showAddForm: false});
    }
    handleAddClick=()=>{
      this.setState({showAddForm: !this.state.showAddForm});
    }
    render(){
      console.log('mobile Company render');
      return(
        <div className="mobileWraper">
          <div className="filterBtn">
            <button className="navBtn" name="all" onClick={this.filterFnc}>все</button>
            <button className="navBtn" name="active" onClick={this.filterFnc}>список активных</button>
            <button className="navBtn" name="blocked" onClick={this.filterFnc}>список заблокированных</button>
          </div>
          <table className="usersTable">
            {!this.state.showActiveList && !this.state.showBlockedList?
             (<Fragment>
              <thead className="tableHeader">
              <tr>
              <th>фамилия</th>
              <th>имя</th>
              <th>отчество</th>
              <th>баланс</th>
              <th>статус</th>
              <th>редактировать</th>
              <th>удалить</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map(elem=><ClientRow key={elem.id} data={elem}/>)
              }
            </tbody>
            </Fragment>):
            (<Filtred data={this.state.filtredData}/>)
            }
          </table>
            <div className={'addBtn'+' '+`${this.state.showActiveList || this.state.showBlockedList?'hideAddBtn':''}`} onClick={this.handleAddClick}>{this.state.showAddForm?'отмена':'добавте нового пользователя'}</div>
            {this.state.showAddForm?<Form/>:null}
        </div>
      )
    }
    
}