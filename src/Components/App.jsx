import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  function updateNote(updatedNote, id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, index) => {
        if (index === id) {
          return updatedNote;
        }
        return note;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-container">
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            onEdit={updateNote}
          />
        );
      })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
