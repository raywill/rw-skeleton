import React, {Component, PropTypes} from 'react'
import { render } from 'react-dom'
import {connect} from 'react-redux'
import Board from '../components/board'
import Chess from '../components/chess'
import {chessClick, chessDbClick} from '../action'

class App extends Component {

  render() {

    const {dispatch, chesses} = this.props;

    return (
      <div>
        <Board
          chesses={chesses}
          onChessClick={(txtValue, index) => dispatch(chessClick(txtValue, index))}
          onChessDbClick={(index) => dispatch(chessDbClick(index))}
        />
      </div>
    );
  }
}




App.propTypes = {
  chesses : PropTypes.arrayOf(PropTypes.string).isRequired
}



function select(state) {

  console.log(state);

  return {
    chesses: state.chess
  };

}

export default connect(select)(App);

