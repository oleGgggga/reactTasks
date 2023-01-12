let Item_Block=React.createClass({
    displayName: 'Item_Block',
    propTypes:{
        data: React.PropTypes.array.isRequired,
    },
    render: function(){
        let itemData=this.props.data.map( elem=>React.createElement(Item, { key: elem.id, title:elem.title, price:elem.price, img:elem.image,}));
        return React.DOM.div({className:'container'}, React.DOM.h1({className:'mainHeader'}, 'web shop'), React.DOM.div({className:'itemBlock'}, itemData));
    },
})