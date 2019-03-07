import React from 'react' ;

export default class DelayedButton extends React.Component {
  var me = this
  doThing = (event) => {
    setTimeout(function() {me.props.onDelayedClick(event) ;}, this.props.delay )
  }
  render() {
    return (
      <div>
        <button  onClick={this.doThing}/>
      </div>
    )
  }
}
