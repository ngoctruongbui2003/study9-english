import React from 'react'
import CardTest from './CardTest/CardTest'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function ListCards() {
    return (
        <Grid container mb={5}>
            <Grid item xs={9}>
                <Grid container spacing={3}>
                    <Grid item lg={2.4} md={4}>
                        <CardTest />
                    </Grid>
                    <Grid item lg={2.4} md={4}>
                        <CardTest />
                    </Grid>
                    <Grid item lg={2.4} md={4}>
                        <CardTest />
                    </Grid>
                    <Grid item lg={2.4} md={4}>
                        <CardTest />
                    </Grid>
                    <Grid item lg={2.4} md={4}>
                        <CardTest />
                    </Grid>
                    <Grid item lg={2.4} md={4}>
                        <CardTest />
                    </Grid>
                    <Grid item lg={2.4} md={4}>
                        <CardTest />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default ListCards
