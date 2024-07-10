import React from 'react'
import Logo from './assets/game-logo.png'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { useState } from 'react'

function MyApp() {
    const [gameTurns, setGameTurns] = useState([]);
    const [isActive, setIsActive] =useState('X');
    
    function HandleSelectChange(rowIndex, colIndex){
        setIsActive((activeSymbol)=> activeSymbol === 'X' ? 'O' : 'X');
        setGameTurns((prevTurns) => {

            let currentPlayer = 'X'

            if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
                currentPlayer = 'O'
            }
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
                    <Player name="Player 1" symbol="X" Active={isActive === 'X'}/>
                    <Player name="Player 2" symbol="O" Active={isActive === 'O'}/>
                </ol>
                <GameBoard isSelectGameBoard={HandleSelectChange} turns={gameTurns} />
            </div>
        </main>
        <Log turns={gameTurns}/>
    </div>
  )
}

export default MyApp
