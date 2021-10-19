import React from 'react'
import { addNote } from '../../store/actions/index'
import {useInputs} from '../../customhook/useInputs'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {
    FormBody,
    FormBtn,
    ImportantBody,
    ImportantInput,
} from '../styled-components/Form'



export const Form = () => {
    const [title, bindTitle, resetTitle] = useInputs()
    const [content, bindContent, resetContent] = useInputs()
    const [deadline, bindDeadline, resetDeadline] = useInputs()
    const [important, setImportant] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote({title, content, deadline, important}))
        resetContent()
        resetTitle()
        resetDeadline()
        setImportant(false)
    }

    return (
        <section className="section"> 
            <FormBody onSubmit={handleSubmit} className="white">
                <header>
                    <h5 className="grey-text text-darken-3">
                        New Note
                    </h5>
                </header>
                    <div className="input-field">
                        <input id="title" type="text" className="validate" {...bindTitle} required/>
                        <label className="active" htmlFor="title">Note Title</label>
                    </div>
                    <div className="input-field">
                        <input id="content" type="text" className="validate" {...bindContent} required/>
                        <label className="active" htmlFor="content">Note Description</label>
                    </div>
                    <div className="input-field">
                        <input id="deadline" type="date" className="validate" {...bindDeadline} required/>
                        <label className="active" htmlFor="deadline">Note Date</label>
                    </div>
                    <ImportantBody>
                        <ImportantInput required id="important" className="radio-input"  type="radio" checked={important} value={important} />
                        <label className="radio-input" htmlFor="important" onClick={() => setImportant(prev => !important)}>Important</label>
                    </ImportantBody>

                    <FormBtn type="submit" className="btn black">Add</FormBtn>
            </FormBody>
            
        </section>

    )
}
