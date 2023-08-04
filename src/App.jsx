import { useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
// import notes from "./notes";
function App() {
  const [note,setNote]=useState({title:"",content:""});
  const [notes,setNotes]=useState([]);
  return (
    <div>
      <Header />
      <Create setNote={setNote} setNotes={setNotes} note={note}/>
      {notes.map((note,index) => <Note key={"note "+index} note={note} setNotes={setNotes}/>)}
      <Footer />
    </div>
  );
}

export default App;
