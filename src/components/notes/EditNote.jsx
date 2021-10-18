import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../store/actions/index'
import {useInputs} from '../../customhook/useInputs'
import { useHistory } from 'react-router-dom'

export const EditNote = () => {

    const note = useSelector(state => state.note)

    const [title, bindTitle, resetTitle] = useInputs(note.title)
    const [content, bindContent, resetContent] = useInputs(note.content)
    const dispatch = useDispatch()
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateNote({id: note.id, title, content, oldTitle: note.title, oldContent: note.content}))
        resetContent()
        resetTitle()
        history.push("/")
    }

    return (
        <section className="section"> 
            <form onSubmit={handleSubmit} className="white">
                <header>
                    <h5 className="grey-text text-darken-3">
                        New Note
                    </h5>
                </header>
                    <div className="input-field">
                        <input id="first_name2" type="text" className="validate" {...bindTitle}/>
                        <label className="active" htmlFor="first_name2">Note Title</label>
                    </div>
                    <div className="input-field">
                        <input id="first_name3" type="text" className="validate" {...bindContent}/>
                        <label className="active" htmlFor="first_name3">Note Title</label>
                    </div>
                    {/* <div className="input-field">
                        <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                        <label htmlFor="note_content">Note Content</label>
                    </div> */}
                    <button type="submit" className="btn green">Update</button>
            </form>
            
        </section>

    )
}
