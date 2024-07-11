import React from 'react'
import Logo from './assets/game-logo.png'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { useState } from 'react'
import GameOver from './components/GameOver'
import { derivedWinner } from './data/Winner'
import { InitialGameBoard } from './data/Winning_Combination'
import { derivedActivePlayer } from './data/Player'

function MyApp() {
    const [playerName , setPlayerName] = useState({
        X : 'Player 1',
        O : 'Player 2',
    })
    const [gameTurns, setGameTurns] = useState([]);
    const ActivePlayer = derivedActivePlayer(gameTurns);
    let GameBoardUpdate = [...InitialGameBoard.map((innerArray) => [...innerArray])]
    let hasDraw = gameTurns.length === 9;
    //Update Game board
    for(const turn of gameTurns){
        const {player , square} = turn;
        const {row ,col} = square;
        GameBoardUpdate[row][col] =player
    }
    const winner =derivedWinner(GameBoardUpdate,playerName)

    //Onclick Handle
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
    function handleRestartGame() {
        setGameTurns([])
    }

    function HandlePlayerChangeName(symbol,playername) {
        setPlayerName((prevPlayerName) => {
            return{
                ...prevPlayerName, 
                [symbol] : playername,
            }
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
                    <Player name="Player 1" symbol="X" Active={ActivePlayer === 'X'} onChangePlayerName={HandlePlayerChangeName}/>
                    <Player name="Player 2" symbol="O" Active={ActivePlayer === 'O'} onChangePlayerName={HandlePlayerChangeName}/>
                </ol>
                {(winner || hasDraw) &&  <GameOver winner={winner} Restart={handleRestartGame}/> }
                <GameBoard isSelectGameBoard={HandleSelectChange} turns={gameTurns}  GameBoardUpdate={GameBoardUpdate}/>
            </div>
        </main>
        <Log turns={gameTurns}/>
    </div>
  )
}

export default MyApp
