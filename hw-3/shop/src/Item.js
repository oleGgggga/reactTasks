import React from "react";
import PropTypes from 'prop-types';
class Item extends React.Component{
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    };
    itemClicked=(eo)=>{
        if (eo.target.closest('.editBtn')){
            console.log(eo.currentTarget.dataset.itemid);
            return;
        };
        if(eo.target.closest('.deletBtn')){
            console.log(eo.currentTarget.dataset.itemid);
            return;
        }

    };
    render(){
        return(
            <div className="itemWraper" data-itemid={this.props.id} onClick={this.itemClicked}>
            <p className="itemTitle">{this.props.title}</p>
            <img src={this.props.image} alt="#"></img>
            <p>{this.props.price}</p>
            <button className="editBtn">edit</button>
            <button className="deletBtn">delete</button>
            </div>
        )
    }
};
export default Item