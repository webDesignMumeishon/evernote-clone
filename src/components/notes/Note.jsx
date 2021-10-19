import React from 'react'
import { deleteNote, toggleFavorite } from '../../store/actions/index'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { NoteBody, NoteContent } from '../styled-components/Note'
import moment from 'moment'

export const Note = ({id, note}) => {
    const dispatch = useDispatch()

    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }

    const toggleFavHandler = () => {
        dispatch(toggleFavorite(note))
    }

    const editNoteHandler = () => {
        dispatch({type: 'EDIT_NOTE', payload: note})
    }

    const heartMarkUp = note.favorite ? 'favorite' : 'favorite_border'
    const importantMarkUp = note.important ? {borderLeft: "solid 3px red"} : null

    return (
        <NoteBody style={importantMarkUp}>

            <NoteContent>
                <Link to={`/detail/${note.id}`}><h5 className="black-text">{note.title}</h5></Link>
                <div>
                    <i className="material-icons red-text" onClick={toggleFavHandler}>{heartMarkUp}</i>
                    <i className="material-icons" onClick={deleteNoteHandler}>delete</i>
                    <Link to={`/edit/${note.id}`}>
                        <i className="material-icons black-text" onClick={editNoteHandler}>edit</i>
                    </Link>
                </div>
            </NoteContent>

            <NoteContent>
                <p className="note-deadline">{note.deadline}</p>
                <p className="grey-text note-deadline">{moment(note.createdAt.toDate()).fromNow()}</p>
            </NoteContent>
        </NoteBody>
    )
}
