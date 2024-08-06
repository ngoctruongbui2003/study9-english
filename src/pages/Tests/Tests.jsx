import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import FilterTests from './FilterTests/FilterTests'
import ListCards from './ListCards/ListCards'


function Tests() {
    return (
        <Box mx={20} py={5}>
            {/* Header */}
            <FilterTests />
            

            {/* Main */}
            <ListCards />
        </Box>
    )
}

export default Tests
