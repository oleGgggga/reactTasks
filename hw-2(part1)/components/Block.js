let Block=React.createClass({
    displayName: 'Block',
    propTypes:{
        data: React.PropTypes.array.isRequired,
    },
    getInitialState: function() {
        return { 
          check: false,
          inputTextValue: '',
          stateArr: this.props.data,
        };
      },
    radioClicked: function(eo){
        this.setState({check: eo.target.checked}, this.calc);
    },
    inputChange: function(eo){
        this.setState({inputTextValue:eo.target.value}, this.calc);
    },
    reset: function(){
        this.setState({check: false, inputTextValue: '', stateArr: this.props.data}, this.calc);
        
    },
    calc: function(){
        let linkStateArr=[...this.props.data];
        if (this.state.inputTextValue){
            linkStateArr=linkStateArr.filter((elem)=>{return elem.includes(this.state.inputTextValue);});
        }
        if (this.state.check){
            linkStateArr.sort();
        }
        // if(!this.state.check && !this.state.inputTextValue){
        //     linkStateArr=this.props.data;
        // };
        this.setState({stateArr:linkStateArr});
        
    },
    render: function(){
        return React.DOM.div({className:'containerFilter'}, React.DOM.input({type:'radio', checked: this.state.check,
        onClick:this.radioClicked},), React.DOM.input({type:'text', value:this.state.inputTextValue, onChange:this.inputChange,},), React.DOM.input( {type:'button',value:'сброс',onClick:this.reset,},), React.DOM.div(null, this.state.stateArr.map((elem)=>{return React.DOM.p({key:`${elem}`}, elem)})))
    },

});