import React from 'react'
import Box from '@mui/material/Box'
import FilterTests from './FilterTests/FilterTests'
import ListCards from './ListCards/ListCards'


function Tests() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }} py={5}>
            <Box sx={{ maxWidth: '80vw' }}>
                {/* Header */}
                <FilterTests />
                {/* Main */}
                <ListCards />
            </Box>
        </Box>
    )
}

export default Tests
