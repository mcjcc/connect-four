import React, { Component } from 'react';


import BoardTile from './BoardTile';

class Board extends Component {
  constructor() {
    super(); 
    let grid = new Array(6).fill(null);
    grid = grid.map((row, i) => {
      return new Array(7).fill(false);
    });

    this.state = {
      grid: grid
    };

    this.renderTiles = this.renderTiles.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleClick(i,j) {
    console.log(i, j);
    let { grid } = this.state;
    for ( let i = 5; i >= 0; i--) {
      if (grid[i][j]) {
        continue;
      } else {
        grid[i][j] = true;
        break;
      }
    }
    this.setState({grid});

  }

  handleHover(i,j,type) {

  }
  

  renderTiles() {
    let {grid} = this.state;

    return grid.map((row, i) => {
      return row.map((square, j) => {
        return (
          <BoardTile
            key={`${i}${j}`}
            i={i}
            j={j}
            isOccupied={square}
            handleHover={this.handleHover}
            handleClick={this.handleClick}
          />
        );
      });
    });
  }

  render() {

    return (
      <div className="board">
        {this.renderTiles()}
      </div>
    );
  }
}

export default Board;
