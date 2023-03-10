import React, { Fragment } from "react";
import PropTypes, { element } from 'prop-types';
import { ClientRow } from "./Client";
import {btnEvents} from './events';
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
      filtredData: this.props.data,
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
      const newArr=this.state.filtredData.map((elem)=>elem.id!==id?elem:editElem);
      const newArrData=this.state.data.map((elem)=>elem.id!==id?elem:editElem);
      this.setState({data:newArrData, filtredData: newArr,}); 
    }
    saveEditClient=(obj)=>{
      delete obj['isEdit'];
      const newArr=this.state.filtredData.map((elem)=>elem.id!==obj.id?elem:obj);
      const newArrData=this.state.data.map((elem)=>elem.id!==obj.id?elem:obj);
      this.setState({data:newArrData, filtredData: newArr,});
    }
    editClient=(id)=>{
      const findElem=this.state.data.find(elem=>elem.id===id);
      const editElem={...findElem};
      editElem.isEdit=true;
      const newArr=this.state.filtredData.map((elem)=>elem.id!==id?elem:editElem);
      const newArrData=this.state.data.map((elem)=>elem.id!==id?elem:editElem);
      this.setState({data:newArrData, filtredData: newArr,}); 
    }
    delClient=(id)=>{
      const newArr=this.state.filtredData.filter((elem)=>{
        return elem.id !==id;
      });
      const newArrData=this.state.data.filter((elem)=>{
        return elem.id !==id;
      });
      this.setState({data: newArrData, filtredData: newArr,});
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
        this.setState({filtredData: this.state.data, showActiveList: false, showBlockedList: false,});
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
            <button className="navBtn" name="all" onClick={this.filterFnc}>??????</button>
            <button className="navBtn" name="active" onClick={this.filterFnc}>???????????? ????????????????</button>
            <button className="navBtn" name="blocked" onClick={this.filterFnc}>???????????? ??????????????????????????????</button>
          </div>
          <table className="usersTable">
            <thead className="tableHeader">
              <tr>
              <th>??????????????</th>
              <th>??????</th>
              <th>????????????????</th>
              <th>????????????</th>
              <th>????????????</th>
              <th>??????????????????????????</th>
              <th>??????????????</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.filtredData.map(elem=><ClientRow key={elem.id} data={elem}/>)
              }
            </tbody>
            </table>
            <div className={'addBtn'+' '+`${this.state.showActiveList || this.state.showBlockedList?'hideAddBtn':''}`} onClick={this.handleAddClick}>{this.state.showAddForm?'????????????':'???????????????? ???????????? ????????????????????????'}</div>
            {this.state.showAddForm?<Form/>:null}
        </div>
      )
    }
    
}