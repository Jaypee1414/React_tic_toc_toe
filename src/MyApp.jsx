import React from 'react'
import Logo from './assets/game-logo.png'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { useState } from 'react'
import { WINNING_COMBINATIONS } from './data/Winning_Combination'


function derivedActivePlayer(gameTurns){
    
    let currentPlayer = 'X'

    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'
    }
    return currentPlayer;
}


const InitialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function MyApp() {
    const [gameTurns, setGameTurns] = useState([]);
    const ActivePlayer = derivedActivePlayer(gameTurns);
    let GameBoardUpdate = InitialGameBoard
    let winner;

    //Update Game board
    for(const turn of gameTurns){
        const {player , square} = turn;
        const {row ,col} = square;
        GameBoardUpdate[row][col] =player
    }

    //step by step check for winning combination
    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = GameBoardUpdate[combination[0].row][combination[0].column]
        const secondSquareSymbol = GameBoardUpdate[combination[1].row][combination[1].column]
        const thirdSquareSymbol = GameBoardUpdate[combination[2].row][combination[2].column]

        if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
            winner = firstSquareSymbol;
        }
    }
    //Handle Player Symbol Change
    function HandleSelectChange(rowIndex, colIndex){
        setGameTurns((prevTurns) => {

            let currentPlayer = derivedActivePlayer(prevTurns);
            const updateTurns = [{
                square: {row: rowIndex, col: colIndex},
                player:  currentPlayer
            },
            ...prevTurns]

            return updateTurns
        })
    }
    
  return ( 
    <div>
        <header>
            <img src={Logo} alt="" />
            <h1>Tic-Toc-Toe</h1>
        </header>
        <main>
            <div id='game-container'> 
                <ol id='players' className='highlight-player'>
                    <Player name="Player 1" symbol="X" Active={ActivePlayer === 'X'}/>
                    <Player name="Player 2" symbol="O" Active={ActivePlayer === 'O'}/>
                </ol>
                {winner && <p>You Won, {winner}!</p>}
                <GameBoard isSelectGameBoard={HandleSelectChange} turns={gameTurns}  GameBoardUpdate={GameBoardUpdate}/>
            </div>
        </main>
        <Log turns={gameTurns}/>
    </div>
  )
}

export default MyApp
