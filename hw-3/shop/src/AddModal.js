import React from "react";
class AddModal extends React.Component{
    state={
        title:"",
        price:"",
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
            this.setState({titleErr:'',});
        }
    };
    priceChange=(eo)=>{
        this.setState({price: eo.target.value});
        const regExp=/^\d{1,7}\.?\d{0,3}$/g;
        if (!regExp.test(eo.target.value)){
            this.setState({priceErr: 'incorrect number'})
        }
        else{
            this.setState({priceErr: '',})
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
    addRender =()=>{
        if (!this.state.titleErr && !this.state.priceErr){
            this.props.cbAddRender(this.state.title, this.state.price);
        }
    }
    chancelBtn=()=>{
        this.props.cbAddRender();
    }


    render(){        
    return(
    <div className="modalWraper">
    {(this.state.titleTarget && this.state.titleErr) && <p className="titleErr">{this.state.titleErr}</p>}
    <textarea name="title" onBlur={this.blurHandler} className="modalTitle" value={this.state.title} onChange={this.titleChange}/>
    {(this.state.priceTarget && this.state.priceErr) && <p className="priceErr">{this.state.priceErr}</p>}
    <input name="price" onBlur={this.blurHandler} type='text' className="modalprice" value={this.state.price} onChange={this.priceChange}/>
    <button onClick={this.addRender}>add</button>
    <button onClick={this.chancelBtn} name="chancel">chancel</button>
    </div>
    )
}
}
export default AddModal
