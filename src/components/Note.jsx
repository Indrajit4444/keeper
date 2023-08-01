import './Note.css'
function Note (prop){
    return (
        <div className="note">
            <h1 contentEditable="true">{prop.title}</h1>
            <p contentEditable="true">{prop.content}</p>
        </div>
    )
}
export default Note;