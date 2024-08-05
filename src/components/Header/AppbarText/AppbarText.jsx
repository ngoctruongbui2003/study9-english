import React from 'react'
import { WrapperAppbarText } from '../style'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function AppbarText() {
    const items = [
        {
            text: "Khóa học của tôi",
            link: "/my-account/courses",
            handleClicked: () => {}
        },
        {
            text: "Đề thi online",
            link: "/tests",
            handleClicked: () => {}
        },
        {
            text: "Flashcard",
            link: "/flashcards",
            handleClicked: () => {}
        },
        {
            text: "Blog",
            link: "/posts",
            handleClicked: () => {}
        },
    ]

    return (
        <Box sx={{
            display: 'flex',
            gap: 2
        }}>
            {items.map((item, index) => (
                <WrapperAppbarText key={index}>
                    <Typography key={index} variant='span'>{item.text}</Typography>
                </WrapperAppbarText>
            ))}
        </Box>
    )
}

export default AppbarText
