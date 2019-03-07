import React from 'react' ;

export default class DelayedButton extends React.Component {
  doThing = (event) => {
    setTimeout(this.props.onDelayedClick(event), this.props.delay )
  }
  render() {
    return (
      <div>
        <button  onClick={this.doThing}/>
      </div>
    )
  }
}
