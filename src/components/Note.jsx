import './Note.css'
function Note (prop){
    return (
        <div className="note">
            <h1>{prop.note.title}</h1>
            <p >{prop.note.content}</p>
            <button onClick={()=>prop.setNotes((notes)=>{
                return notes.filter(note=>note!==prop.note)
            })}>DELETE</button>
        </div>
    )
}
export default Note;