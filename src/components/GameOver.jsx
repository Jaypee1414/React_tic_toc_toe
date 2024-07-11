import React from 'react'

function GameOver({winner ,Restart}) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Draw!!!</p>}
      <p>
        <button onClick={Restart}>Remacth</button>
      </p>
    </div>
  )
}

export default GameOver
