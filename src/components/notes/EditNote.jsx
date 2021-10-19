import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../store/actions/index'
import {useInputs} from '../../customhook/useInputs'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { EditBody } from '../styled-components/Edit'


export const EditNote = () => {

    const note = useSelector(state => state.note)
    
    const [title, bindTitle, resetTitle] = useInputs(note.title)
    const [content, bindContent, resetContent] = useInputs(note.content)
    const [deadline, bindDeadline, resetDeadline] = useInputs(note.deadline)
    const [important, setImportant] = useState(note.important)

    
    const dispatch = useDispatch()
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateNote({id: note.id, title, content,deadline, oldTitle: note.title, oldContent: note.content, oldDeadline: note.deadline, oldImportant: important}))
        resetContent()
        resetTitle()
        resetDeadline()
        setImportant(false)
        history.push("/")
    }

    return (
        <EditBody className="section"> 
            <form onSubmit={handleSubmit} className="white">
                <header>
                    <h5 className="grey-text text-darken-3" style={{padding: ".3em"}}>
                        Edit Note
                    </h5>
                </header>
                    <div className="input-field">
                        <input id="first_name2" type="text" important className="validate" {...bindTitle}/>
                        <label className="active" htmlFor="first_name2">Note Title</label>
                    </div>
                    <div className="input-field">
                        <input id="first_name3" type="text" className="validate"{...bindContent}/>
                        <label className="active" htmlFor="first_name3">Note Content</label>
                    </div>
                    <div className="input-field">
                        <input id="deadline" type="date" className="validate" {...bindDeadline}/>
                        <label className="active" htmlFor="deadeline">Note Date</label>
                    </div>
                    <div style={{display: "flex", flexDirection: 'row-reverse', justifyContent: "space-around", alignItems: "center"}}>
                        <input id="important" className="radio-input" style={{opacity: "1", position: "relative"}} type="radio" checked={important} value={important} />
                        <label className="radio-input" htmlFor="important" onClick={() => setImportant(prev => !important)}>Important</label>
                    </div>
                    <button type="submit" className="btn black add-btn">Update</button>
            </form>
            
        </EditBody>

    )
}
