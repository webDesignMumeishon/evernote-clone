import React from 'react'
import { Form } from './Form'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { NotesList } from '../notes/NotesList.jsx'

export const Home = () => {
    useFirestoreConnect ([{collection: 'notes',orderBy:['createdAt', 'desc']} ])
    const notes = useSelector((state) => state.firestore.ordered.notes)
    return (
        <div className="container">
            <div className="row center-align">
                <div className="col s7"><Form></Form></div>
                <div className="col s5"><NotesList notes={notes}></NotesList></div>
            </div>
        </div>
    )
}
