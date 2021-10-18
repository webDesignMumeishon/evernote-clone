import React from 'react'
import { deleteNote, toggleFavorite } from '../../store/actions/index'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
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

    return (
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" onClick={toggleFavHandler}>{heartMarkUp}</i>
                <i className="material-icons" onClick={deleteNoteHandler}>delete</i>
            </div>
            <Link to={`/detail/${note.id}`}>
                <h5 className="black-text">{note.title}</h5>
            </Link>
            <p className="truncate">{note.content}</p>
            <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align">
                <Link to={`/edit/${note.id}`}>
                    <i className="material-icons black-text" onClick={editNoteHandler}>edit</i>
                </Link>
            </div>
        </div>
    )
}
