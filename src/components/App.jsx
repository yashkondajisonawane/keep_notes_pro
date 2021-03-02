import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((noteEle, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteEle.title}
            content={noteEle.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
