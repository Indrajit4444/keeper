import './Create.css'
function Create(props){
    function handleChange(event){
        const{name,value}=event.target;
        props.setNote((prev)=>
            ({...prev,[name]:value})
        )
    }
    function handleSubmit(event){
        event.preventDefault();
        props.setNotes((prev)=>{
            return [...prev,props.note];
        })
        props.setNote({title:"",content:""});
    }
    return <div>
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} value={props.note.title}/>
      <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={props.note.content}/>
      <button type="submit">Add</button>
    </form>
  </div>
}
export default Create;