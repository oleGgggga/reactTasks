import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";
import Modal from "./Modal";
import AddModal from "./AddModal";
class App extends React.Component{
  static propTypes = {
    data:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        
      })
    ),};
  state={
    dataState: this.props.data,
    modalId: null,
    editObj: null,
    addModal: false,

  };
  edit=(id)=>{
    let index=this.state.dataState.findIndex((elem)=>{return elem.id===+id});
    let obj=this.state.dataState[index];
    this.setState({editObj: obj});
    this.setState({modalId: id});
  }
  del=(id)=>{
    let newLinkArr=[...this.state.dataState];
    newLinkArr.splice(newLinkArr.findIndex((elem)=>{return elem.id===+id}), 1);
    this.setState({dataState:newLinkArr});
  }
  editModalRender=(title, price)=>{
    this.setState({dataState: this.state.dataState.map(elem=>elem.id === +this.state.modalId ? {...elem, title, price: +price}:elem)})
    this.setState({modalId:null, editObj: null,});
  }
  addBtn=()=>{
    this.setState({addModal: true})
  }
  addReder=(title, price)=>{
    if(title && price){
      const newArr=[...this.state.dataState];
      newArr.push({
        id:this.state.dataState.length+1,
        title,
        price: +price,
        })
      this.setState({dataState: newArr})
    }
    this.setState({addModal: false,})
  }

  render(){
    const itemData=this.state.dataState.map(elem=><Item modalId={this.state.modalId} addModal={this.state.addModal} key={elem.id} id={elem.id} title={elem.title} price={elem.price} img={elem.image} cbedit={this.edit} cbdel={this.del}/>)
    return(
      <>
      <div className='container'>
        <h1 className='mainHeader'>web shop</h1>
        <div className="addBtn" onClick={this.addBtn}>add</div>
        <div className='itemsWraper'>{itemData}</div>
      </div>
      {
        this.state.modalId && <Modal title={this.state.editObj.title} price={this.state.editObj.price} cbeditModal={this.editModalRender}/>
      }
      {
        this.state.addModal && <AddModal cbAddRender={this.addReder}/>
      }
      </>
    )
  }



}

export default App;
