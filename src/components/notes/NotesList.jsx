import React from 'react'
import { Note } from './Note'

export const NotesList = ({notes}) => {
    return (
        <div className="notesList">
            {notes && notes.map(note => <Note note={note} key={note.id}></Note>)}
        </div>
    )
}
