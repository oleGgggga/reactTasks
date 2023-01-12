let Item = React.createClass({

    displayName: 'Item',
    itemClick: function(eo){
      if (eo.target.closest('input')){
        this.deletItem(eo.currentTarget.id);
        return;
      };
      console.log('hi');
      this.props.cbItemSelected(eo.currentTarget.id);
    },
    deletItem: function(id){
      this.props.cbItemDeleted(id);      
    },
    
    render: function() {
        return React.DOM.div( {className:'itemWraper', id: `${this.props.id}`, onClick: this.itemClick, style:{width: 200 + 'px'},}, 
        React.DOM.header({className:'title'},this.props.title),
        React.DOM.div({className:'image'}, React.DOM.img({src:`${this.props.img}`, style:{width: 200 + 'px'}})),
        React.DOM.p({className:'price'},this.props.price), React.DOM.input( {type:'button', value: `${'delete'+' ' +this.props.id }`,},),
        );
      },
   
    }
  
  );