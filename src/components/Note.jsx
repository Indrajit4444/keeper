import './Note.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';
function Note (prop){
    const [showNote,setShowNote]=useState(true)
    function handleClick(){
        setShowNote(false);
        setTimeout(()=>{prop.setNotes((notes)=>notes.filter(note=>note!==prop.note))},300);
    }
    return <Zoom in={showNote}>
        <div className="note">
            <h1>{prop.note.title}</h1>
            <p >{prop.note.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    </Zoom>
    
}
export default Note;