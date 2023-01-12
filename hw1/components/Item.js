let Item = React.createClass({

    displayName: 'Item',
  
    render: function() {
        return React.DOM.div( {className:'itemWraper', style:{width: 200 + 'px'}},
        React.DOM.header({className:'title'},this.props.title),
        React.DOM.div({className:'image'}, React.DOM.img({src:`${this.props.img}`, style:{width: 200 + 'px'}})),
        React.DOM.p({className:'price'},this.props.price),
        );
      },
    
    }
  
  );