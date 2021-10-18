import React from 'react'
import { addNote } from '../../store/actions/index'
import {useInputs} from '../../customhook/useInputs'
import { useDispatch } from 'react-redux'

export const Form = () => {
    const [title, bindTitle, resetTitle] = useInputs()
    const [content, bindContent, resetContent] = useInputs()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote({title, content}))
        resetContent()
        resetTitle()
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
                    <button type="submit" className="btn green">Add</button>
            </form>
            
        </section>

    )
}
