import React, {Component, PropTypes} from 'react'

export default class Chess extends Component {
  render() {
    return (
      <div
        onClick={(e) => this.handleClick(e)}
        onDoubleClick={(e) => this.handleDbClick(e)}
        ref='chess'>
        {this.props.txtValue}
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.chess;
    const chessName = node.innerHTML; 
    this.props.onChessClick(chessName, 1);
  }

  handleDbClick(e) {
    this.props.onChessDbClick(1);
  }



}

Chess.propTypes = {
  onChessClick : PropTypes.func.isRequired,
  onChessDbClick : PropTypes.func.isRequired,
  txtValue : PropTypes.string.isRequired
}


