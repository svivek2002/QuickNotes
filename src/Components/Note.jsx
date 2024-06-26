import React, { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
    props.onEdit({ title, content }, props.id);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  return (
    <div className={`note ${isEditing ? "note-editing" : ""}`}>
      {isEditing ? (
        <div>
          <input
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={content}
            onChange={handleChange}
            placeholder="Take a note..."
            rows="3"
          />
          <button className="note-save-button" onClick={handleSave}>💾</button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className="note-delete-button" onClick={handleDelete}>🗑️</button>
          <button className="note-edit-button" onClick={handleEdit}>✏️</button>
        </div>
      )}
    </div>
  );
}

export default Note;
