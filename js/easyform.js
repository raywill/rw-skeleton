var React = require('react');
var ReactDOM = require('react-dom');

var Game = React.createClass({

  getInitialState : function() {
    return {playing: false, tiles : []};
  },

  startGame : function(words) {
    this.setState({
      tiles : words,
      playing : true
    });
  },

  endGame : function() {
    this.setState({
      playing : false
    });
  },


  render : function() {
    return (
      <div>
        <h1>
          Hello Game
        </h1>
        <div>
          <Wordform startGame={this.startGame} />
        </div>
        <div>
          <Board tiles={this.state.tiles} />
        </div>
      </div>
    );
  }

}); // end of module def

// Tile
var Tile = React.createClass({

  getInitialState() {
    return {flipped : false};
  },

  onMyTileClick : function(e) {
    e.preventDefault();
    this.props.onTileClick(this); // is this good? What about Flux?
  },

  flip : function() {
    this.setState({flipped : !this.state.flipped});
  },

  render : function() {
    return (
      <div onClick={this.onMyTileClick} className={'tile' + (this.state.flipped ? 'flipped' : '')}>{this.props.word}</div>
    );
  }

});

// Board def
var Board = React.createClass({

  getInitialState : function() {
    return null;
  },

  onTileClick : function(tile) {
    // set tile state
    tile.flip();
  },

  render : function() {
    var tiles = this.props.tiles.map(function(word, idx) {
      return <Tile word={word} key={idx} onTileClick={this.onTileClick} />;
    }, this);
    return (
      <div>
        {tiles}
      </div>
    );
  }

});

// Wordform defination
var Wordform = React.createClass({

  getInitialState : function() {
    return {error : ''};
  },

  setError : function(msg) {
    this.setState({error : msg});
    setTimeout(function() {
      this.setState({error : ''});
    }.bind(this), 3000);
  },

  submitWord : function(e) {
    var words = "Hello Little Monkey".split(" ");
    this.props.startGame(words);
    e.preventDefault();
    return false;
  },

  render : function() {
    return (
      <form onSubmit={this.submitWord}>
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
