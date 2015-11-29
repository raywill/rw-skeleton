import React, {Component} from 'react'
import { render } from 'react-dom'

import Board from '../components/board'
import Chess from '../components/chess'

export default class App extends Component {
  render() {
    return (
      <div>
        <Board
          chesses={['hello', 'world', 'redux', 'react']}
          onChessClick={(index) => console.log('clicked ', index)}
        />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById("form-container")
);
