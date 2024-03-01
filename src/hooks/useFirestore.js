import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
    document: null,
    inPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type){


        default: 
        return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)
}