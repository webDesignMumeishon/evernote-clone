import {firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import noteReducer from "./noteReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    note: noteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer