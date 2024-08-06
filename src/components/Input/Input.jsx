import React from 'react'
import TextField from '@mui/material/TextField'

function Input({placeholder, ...props}) {
    return (
        <TextField
            id="outlined-multiline-flexible"
            label={placeholder}
            multiline
            maxRows={4}
            {...props}
        />
    )
}

export default Input
