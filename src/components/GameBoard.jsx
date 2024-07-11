import { useState, React } from "react";

function GameBoard({isSelectGameBoard,turns, GameBoardUpdate}) {

  return (
    <ol id='game-board'>
        {
            GameBoardUpdate.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=>(
                            <li key={colIndex}><button onClick={()=> {isSelectGameBoard(rowIndex, colIndex)}} disabled={playerSymbol !== null }>{playerSymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))
        }
    </ol> 
  )
}

export default GameBoard
