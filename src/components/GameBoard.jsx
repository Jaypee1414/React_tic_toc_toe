import { useState, React } from "react";

const InitialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard({isSelectGameBoard,turns}) {

    let GameBoardUpdate = InitialGameBoard

    for(const turn of turns){
        const {player , square} = turn;
        const {row ,col} = square;
        GameBoardUpdate[row][col] =player
    }
    // const [GameBoardUpdate, setGameBoardUpdate] = useState(InitialGameBoard)

    // function HandleClickBoard(rowIndex, colIndex){
    //     setGameBoardUpdate((prevGameBoard) => {
    //         const newInitialGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         newInitialGameBoard[rowIndex][colIndex] = activeSymbol;
    //         return newInitialGameBoard;
    //     })
    //     isSelectGameBoard();
    // }
  return (
    <ol id='game-board'>
        {
            GameBoardUpdate.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=>(
                            <li key={colIndex}><button onClick={()=> {isSelectGameBoard(rowIndex, colIndex)}}>{playerSymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))
        }
    </ol> 
  )
}

export default GameBoard
