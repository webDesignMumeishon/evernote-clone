
export const addNote = (note) => {
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favorite: false,
            createdAt: new Date()
        })
        .then(() => {
            console.log('add the note successfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete() 
        .then(() => {
            console.log('delete the note successfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const toggleFavorite = (note) => {
    return (dispatch, getState, {getFirestore}) =>{

        const favStatus = !note.favorite

        const firestore = getFirestore()

        firestore.collection('notes').doc(note.id).update({
            favorite: favStatus
        }) 
        .then(() => {
            console.log('toggle fav successfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const updateNote = (note) => {
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore()
        const updatedTitle = !note.title ? note.oldTitle : note.title
        const updatedContent = !note.content ? note.oldContent : note.content
        firestore.collection('notes').doc(note.id).update({
            title: updatedTitle, 
            content: updatedContent
        }) 
        .then(() => {
            console.log('note updated successfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
