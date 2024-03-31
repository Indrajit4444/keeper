import './Create.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
function Create(props){
  const [titleArea,setTitleArea]=useState(false);
  const [title,setTitle]=useState(false);
  const [isTitleEmpty,handleIsTitleEmpty]=useState(true);
  const [isContentEmpty,handleIsContentEmpty]=useState(true);
    function handleChange(event){
        const{name,value}=event.target;
        // console.log(name);
        if (name==='title'){
          if (value==="")
            handleIsTitleEmpty(true);
          else handleIsTitleEmpty(false);
        }
        if (name==='content'){
          if (value==="")
            handleIsContentEmpty(true);
          else handleIsContentEmpty(false);
        }
        props.setNote((prev)=>
            ({...prev,[name]:value})
        )
    }
    function handleSubmit(event){
        event.preventDefault();
        handleIsTitleEmpty(true);
        handleIsContentEmpty(true);
        props.setNotes((prev)=>{
            return [...prev,props.note];
        })
        props.setNote({title:"",content:""});
    }
    const mouseOutHandle= async()=>{
      if (isTitleEmpty && isContentEmpty){
        setTitleArea(false);
        await delay(300);
        setTitle(false);
      }
    }
    return <div>
    <form onSubmit={handleSubmit} onMouseOver={()=>{setTitleArea(true);setTitle(true)}} onMouseLeave={mouseOutHandle}>
      {title &&
        <Zoom in={titleArea}>
          <input name="title" placeholder="Title" onChange={handleChange}  value={props.note.title}/>
        </Zoom>
      }
      <textarea name="content" placeholder="Take a note..." rows={title ? "3": "1"} onChange={handleChange} value={props.note.content} />
      <Zoom in={titleArea}>
        <Fab type="submit" aria-label="add" className='button'>
         <AddIcon fontSize="large" />
        </Fab>
      </Zoom>
    </form>
  </div>
}
export default Create;