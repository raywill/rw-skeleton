var React = require('react');
var ReactDOM = require('react-dom');

var Game = React.createClass({

  startGame(words) {
     
  },


  render() {
    return (
      <div>
        <h1>
          Hello Game
        </h1>
        <div>
          <Wordform startGame={this.startGame} />
        </div>
        <div>
          <Board />
        </div>
      </div>
    );
  }

});


var Wordform = React.createClass({
 
  getInitialState() {
    return {error : ''};
  },

  setError(msg) {
    this.setState({error : msg});
    setTimeout(function() {
      this.setState({error : ''});
    }.bind(this), 3000);
  },

  submitWord() {
    var words = "Hello Little Monkey".split(" ");
    this.props.startGame(words);
    return false;
  }

  render() {
    return (
      <form onSubmit="{this.submitWord}">
        <p>Enter 3 words seperated by space</p>
        <input type="text" ref="wordfield" />
        <button type="submit">Game Start</button>
        <p className="error" ref="errmsg">{this.state.error}</p>
      </form>
    )
  }

});

ReactDOM.render(
  <Game />,
  document.getElementById("form-container")
);


module.exports = 'hello';
