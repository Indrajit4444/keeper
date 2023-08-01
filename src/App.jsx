// import header from './components/Header';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";
function App() {
  return (
    <div>
      <Header />
      {notes.map(note => <Note title={note.title} content={note.content} />)}
      <Footer />
    </div>
  );
}

export default App;
