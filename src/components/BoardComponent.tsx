import React from "react";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board: Board, setBoard}) => {

  return (
    <div className="board">
      {Board.cells.map((row: Cell[], index: number) => 
        <React.Fragment key={index}>
          
        </React.Fragment>
      )}
    </div>
  );
};

export default BoardComponent;