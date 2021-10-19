import React from 'react'
import { Note } from './Note'
import { useState } from 'react'

export const NotesList = ({notes}) => {

    return (
        <div>
            {notes && notes.map(note => <Note note={note} key={note.id}></Note>)}
        </div>
    )
}
