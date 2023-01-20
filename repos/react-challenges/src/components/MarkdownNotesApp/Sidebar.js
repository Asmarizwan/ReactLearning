import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
                
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                 {/* A delete button shows while hovering over the notes and it isinside the
                 map function so it will appear while hovering over the notes,  css applied*/}
                <button className="delete-btn" onClick={(event)=>props.deleteNote(event,note.id)}>
                <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
               
              {/* a delete button which will show besides + button and its css is applied */}
                {/* <div className="btn">
                <button className="delete-btn" onClick={(event)=>props.deleteNote(event, note.id)}>
                    <i className="gg-trash trash-icon"></i>
                </button>
                </div> */}
            </div>
            {noteElements}
        </section>
    )
}