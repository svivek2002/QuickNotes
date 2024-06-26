import React, { useState, useEffect } from "react";

function CreateArea(props) {
  const [detail, setDetail] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (props.editNote) {
      setDetail({
        title: props.editNote.title,
        content: props.editNote.content,
      });
    }
  }, [props.editNote]);

  function handleChange(event) {
    const { name, value } = event.target;
    setDetail((prevDetail) => {
      return {
        ...prevDetail,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.isEditing) {
      props.onEdit(detail, props.noteId);
    } else {
      props.onAdd(detail);
    }
    setDetail({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={detail.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={detail.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleSubmit}>
          {props.isEditing ? "Update" : "➕"}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
