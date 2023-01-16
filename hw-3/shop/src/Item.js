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
            this.props.cbedit(eo.currentTarget.dataset.itemid)
            return;
        };
        if(eo.target.closest('.deletBtn')){
            this.props.cbdel(eo.currentTarget.dataset.itemid)
            return;
        }

    };
    render(){
        return(
            <div className="itemWraper" data-itemid={this.props.id} onClick={this.itemClicked}>
            <p className="itemTitle">{this.props.title}</p>
            <img src={require('./img/1.jpg')} alt="#"></img>
            <p>{this.props.price}</p>
            <button disabled={this.props.modalId || this.props.addModal? "disabled" :""} className="editBtn">edit</button>
            <button disabled={this.props.modalId || this.props.addModal? "disabled" :""} className="deletBtn">delete</button>
            </div>
        )
    }
};
export default Item