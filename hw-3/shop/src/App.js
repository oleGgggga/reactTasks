import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";
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
  };
  render(){
    const itemData=this.state.dataState.map(elem=><Item key={elem.id} id={elem.id} title={elem.title} price={elem.price} img={elem.image}/>)
    return(
      <div className='container'>
        <h1 className='mainHeader'>web shop</h1>
        <div className='itemsWraper'>{itemData}</div>
      </div>
    )
  }



}

export default App;
