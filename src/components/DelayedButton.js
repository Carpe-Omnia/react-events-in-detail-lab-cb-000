import React from 'react' ;

export default class DelayedButton extends React.Component {
  doThing = (event) => {
    event.persist() ;
    const propThing = this.props.onDelayedClick
    setTimeout(function(event) {propThing(event) ;}, this.props.delay )
  }
  render() {
    return (
      <div>
        <button  onClick={this.doThing}/>
      </div>
    )
  }
}
