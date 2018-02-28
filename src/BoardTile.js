import React from 'react';

class BoardTile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { i, j, handleClick, handleHover, isOccupied } = this.props;    
    return (
      <div 
        className={`board-tile ${isOccupied}`}
        onClick={() => {handleClick(i, j)}}
        onMouseEnter={() => handleHover(i, j, "enter")}
        onMouseLeave={() => handleHover(i, j, "leave")}
      >  
      {isOccupied}
      </div>
    );
  }
}

export default BoardTile;
