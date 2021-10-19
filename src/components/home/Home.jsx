import React from 'react'
import { Form } from './Form'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { NotesList } from '../notes/NotesList.jsx'
import { Footer } from './Footer'
import { useState } from 'react'
import styled from 'styled-components'
import { Pagination } from '../layout/Pagination'

const FormSection = styled.section`
width: 55%;
float: left;
`

export const Home = () => {
    useFirestoreConnect ([{collection: 'notes',orderBy:['createdAt', 'desc']} ])
    const notes = useSelector((state) => state.firestore.ordered.notes)

    const changePageNumber = (pageNum) => {
        setPage(pageNum)
    }

    const [page, setPage] = useState(0)
    const start = page * 4
    const end = start + 4
    const numberOfNotes = notes?.slice(start,end)

    return (
        <div className="container">
            <section className="form-container">
                <Form/>
            </section>
            <section className="notesList">
                <NotesList notes={numberOfNotes}></NotesList>
            </section>
                <Pagination notes={notes?.length} changePageNumber={changePageNumber}></Pagination>
            <Footer/>
        </div>
    )
}
