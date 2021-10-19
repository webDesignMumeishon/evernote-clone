import styled from 'styled-components'

export const NoteBody = styled.div`
padding: 1em;
margin-top: 0.3em;
font-family: 'Poppins', sans-serif;
width: 100%;
background-color: #f4f4f4c9;
margin: 5px;
transition: all 1s ease
&:hover{
  transform: translateX(10px);
}
`

export const NoteContent = styled.div`
    display: flex;
    justify-content: space-between;
    & i {
     cursor: pointer;
    }
`