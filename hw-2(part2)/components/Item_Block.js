let Item_Block=React.createClass({
    displayName: 'Item_Block',
    propTypes:{
        data: React.PropTypes.array.isRequired,
    },
    getInitialState: function() {
        return { 
          selectedItem: null,
          stateData:this.props.data,
        };
      },
    itemSelected: function(elem){
        this.setState({selectedItem: elem});
    },
    itemDeleted: function(stringId){
        let newLinkArr=[...this.state.stateData];
        newLinkArr.splice(newLinkArr.findIndex((elem)=>{return elem.id===+stringId}), 1);
        this.setState({stateData:newLinkArr});
    },
    render: function(){
        let itemData=this.state.stateData.map( elem=>React.createElement(Item, { key: elem.id, id:elem.id, title:elem.title, price:elem.price, img:elem.image, cbItemSelected: this.itemSelected, cbItemDeleted:this.itemDeleted, selected: this.state.selectedItem}));
        return React.DOM.div({className:'container'}, React.DOM.h1({className:'mainHeader'}, 'web shop'), React.DOM.div({className:'itemBlock'}, itemData));
    },
})