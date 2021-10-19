import React from 'react'
import styled from 'styled-components'

const PaginationBtn = styled.button`
    margin-right: .5em;
    cursor: pointer;
    background-color: black;
    color: white;
    border: none;
    padding: .5em;
    border-radius: 5px;
`


export const Pagination = ({notes, changePageNumber}) => {

    const numberOfPages = notes ? Math.ceil(notes/4) : null

    const buttons = []

    for(let i = 0; i < numberOfPages; i++){
        buttons.push(<PaginationBtn onClick={() => changePageNumber(i)}>{i+1}</PaginationBtn>)
    }

    return (
        <div className="pagination">
            {buttons.map(b => b)}
        </div>
    )
}
