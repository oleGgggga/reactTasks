import React from "react";
import PropTypes from 'prop-types';
class Modal extends React.Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    };
    state={
        title:this.props.title,
        price:this.props.price,
        titleTarget:false,
        priceTarget:false,
        titleErr:'',
        priceErr:'',
    };
    titleChange=(eo)=>{
        this.setState({title: eo.target.value});
        const regExp=/^.{3,40}$/g;
        if (!regExp.test(eo.target.value)){
            this.setState({titleErr:'field must be filled with characters in the range from 3 to 40'})
        } else {
            this.setState({titleErr:'', titleTarget:false,});
        }
    };
    priceChange=(eo)=>{
        this.setState({price: eo.target.value});
        const regExp=/^\d{1,7}\.?\d{0,3}$/g;
        if (!regExp.test(eo.target.value)){
            this.setState({priceErr: 'incorrect number'})
        }
        else{
            this.setState({priceErr: ''})
        }
    };
    blurHandler=(eo)=>{
        setTimeout(()=>{
        switch (eo.target.name){
            case 'title':
                this.setState({titleTarget: true});
                break;
            case 'price':
                this.setState({priceTarget: true});
                break;
            default:
                break;
        }},300)
    }
    editBtn =()=>{
        if (!this.state.titleErr && !this.state.priceErr){
            this.props.cbeditModal(this.state.title, this.state.price);
        }
    }
    chancelBtn=()=>{
        this.props.cbeditModal(this.props.title, this.props.price);
    }
    
    render(){
        return(
            <div className="modalWraper">
                {(this.state.titleTarget && this.state.titleErr) && <p className="titleErr">{this.state.titleErr}</p>}
                <textarea name="title" onBlur={this.blurHandler} className="modalTitle" value={this.state.title} onChange={this.titleChange}/>
                {(this.state.priceTarget && this.state.priceErr) && <p className="priceErr">{this.state.priceErr}</p>}
                <input name="price" onBlur={this.blurHandler} type='text' className="modalprice" value={this.state.price} onChange={this.priceChange}/>
                <button onClick={this.editBtn}>save</button>
                <button tabIndex="-1" onClick={this.chancelBtn} name="chancel">chancel</button>
            </div>
        )
    }
};
export default Modal