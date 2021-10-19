import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'
export const NoteDetail = (props) => {
    const id = props.match.params.id
    useFirestoreConnect([{collection: 'notes', doc:id}])
    const note = useSelector(({firestore: {data}}) => data.notes && data.notes[id])

    const noteMarkUp = !isLoaded(note) ? (
        <div className="container section detail-container">
            <div className="card z-depth-0">
                <div className="card content">
                    <span className="card-title">Loading...</span>
                    <div className="card-action grey lighten-4"></div>
                </div>
            </div>
        </div>
    ) : isEmpty(note) ? (
        <div className="container section detail-container">
        <div className="card z-depth-0">
            <div className="card content">
                <span className="card-title">The note content is empty</span>
                <div className="card-action grey lighten-4">
                    <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    </div>
    ) : (
        <div className="container section detail-container">
        <div className="card z-depth-0">
            <div className="card content">
                <span className="card-title">{note?.title}</span>
                <p><span className="span-style">Description </span>{note?.content}</p>
                <p><span className="span-style">Date </span> {note.deadline}</p>
                <div className="card-action grey lighten-4">
                    <div>Created: {moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
          
        </div>
    </div>
    )

  return noteMarkUp
}
