import React from 'react' ;

export default class CoordinatesButton extends React.Component {
  onReceiveCoordinates = this.props.onReceiveCoordinates ;

  render() {
    return (
      <div>
        <button onClick={this.doFunction} />
      </div>
    )
  }
}
