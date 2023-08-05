import './Create.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';
function Create(props){
  const [titleArea,setTitleArea]=useState(false);
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
    <form onSubmit={handleSubmit} onMouseOver={()=>setTitleArea(true)} onMouseOut={()=>setTitleArea(false)}>
      {titleArea &&
        <Zoom in={true}>
          <input name="title" placeholder="Title" onChange={handleChange}  value={props.note.title}/>
        </Zoom>
      }
      <textarea name="content" placeholder="Take a note..." rows={titleArea ? "3": "1"} onChange={handleChange} value={props.note.content} />
      <Zoom in={titleArea}>
        <Fab type="submit" aria-label="add" className='button'>
         <AddIcon fontSize="large" />
        </Fab>
      </Zoom>
    </form>
  </div>
}
export default Create;