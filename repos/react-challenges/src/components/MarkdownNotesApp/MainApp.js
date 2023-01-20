import React, { useEffect } from "react"
import { useState } from "react"
import Sidebar from './Sidebar'
import Editor from './Editor'
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {

    const [notes, setNotes] = React.useState(()=>JSON.parse(localStorage.getItem('notes'))||[])
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    )
    //to use a local storage to save the data in the local storage. But when we make changes
    // with every key stroke the function rendered, while setting the local storage it doesnot
    // take much effort for the browser but it cost much for the browser in get function
    // we can prevent this re-rendering by lazy loading byintroducing an arrow function in useState getItem
    // se example  [notes, setNotes] = React.useState(()=>(JSON.parse(localStorage.getItem('notes')))||[])

    //if the page does not load this may be because of this function because it save the
    //state of error as well in local storage
    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
        // console.log(notes[0].body)
    }, [notes])

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    //To rearrange the notes after updating so that it would be at the top of the list we need to modify the
    //map method because the map method return the exact copy of old array so the items are placed where
    // the were before
    //This doesnot re-arrange the notes
//    const updateNote=(text) =>{
//         setNotes(oldNotes => oldNotes.map(oldNote => {
//             return oldNote.id === currentNoteId
//                 ? { ...oldNote, body: text }
//                 : oldNote
//         }))
//     }
const updateNote=(text)=>{
    //put the most recent modified code at the top
       setNotes(oldNotes=>
        {
            const newArray =[]
            for(let i =0; i < oldNotes.length; i++)
            {
            const oldNote = oldNotes[i]
            if(oldNote.id === currentNoteId)
            {
                newArray.unshift({ ...oldNote, body: text })
            }
            else
            {
                newArray.push(oldNote)
            }
    }
    return newArray
})
}
    // it is used to highlight the selected note
   const findCurrentNote=()=> {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    const deleteNote=(event, noteId)=>{
            event.stopPropagation()
            console.log('delted note', noteId)
        setNotes((oldNotes) =>
        oldNotes.filter((note) => note.id !== noteId)
        )
}

    return (
        <main>
        {
            notes.length > 0
            ?
            <Split
                sizes={[30, 70]}
                direction="horizontal"
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId &&
                    notes.length > 0 &&
                    <Editor
                        currentNote={findCurrentNote()}
                        updateNote={updateNote}
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button
                    className="first-note"
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>

        }
        </main>
    )

}
