import React from 'react'
import { WrapperAppbarText } from '../style'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


function AppbarText() {
    const navigate = useNavigate();

    const items = [
        {
            text: "Khóa học của tôi",
            link: "/my-account/courses",
        },
        {
            text: "Đề thi online",
            link: "/tests",
        },
        {
            text: "Flashcard",
            link: "/flashcards",
        },
        {
            text: "Blog",
            link: "/posts",
        },
    ]

    return (
        <Box sx={{
            display: 'flex',
            gap: 2
        }}>
            {items.map((item, index) => (
                <WrapperAppbarText key={index}>
                    <Typography
                        key={index}
                        variant='span'
                        onClick={() => navigate(item.link)}
                    >
                        {item.text}
                    </Typography>
                </WrapperAppbarText>
            ))}
        </Box>
    )
}

export default AppbarText
