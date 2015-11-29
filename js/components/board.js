import React, {PropTypes, Component} from 'react'
import Chess from './chess'

export default class Board extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.chesses.map((chessName, index) =>
          <Chess
            txtValue={chessName}
            key={index}
            onChessClick={(chessName, index) => this.props.onChessClick(chessName, index)}  
            onChessDbClick={(index) => this.props.onChessDbClick(index)} 
          />
          )}
        </ul>
      </div>
    );
  }
}


Board.propTypes = {
  chesses : PropTypes.arrayOf(PropTypes.string).isRequired,
  onChessClick : PropTypes.func.isRequired,
  onChessDbClick : PropTypes.func.isRequired,
}
