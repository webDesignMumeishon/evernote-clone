import React from 'react'
import { useState } from 'react'

export const useInputs = (initialValue = '') => {
    const [value, setValue] = useState()

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value, 
        onChange: (e) => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}
