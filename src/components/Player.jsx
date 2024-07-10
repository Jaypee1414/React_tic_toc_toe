import { useState , React} from "react"

function Player({name, symbol, Active}) {
    const [isEditing , setIsEditing] = useState(false);
    const [isPlayerName, setIsPlayerName] =useState(name);

    function HandleClick(){
        setIsEditing(editing => !editing);
        
    }

    function HandleChange(event){
        setIsPlayerName(event.target.value);
    }
  return (
    <li className={Active? 'active' : undefined}>
        <span className='player' >
            {
                !isEditing ? <span className='player-name'>{isPlayerName}</span> : <input type="text" required value={isPlayerName} onChange={HandleChange}></input>
            }
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={HandleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player
