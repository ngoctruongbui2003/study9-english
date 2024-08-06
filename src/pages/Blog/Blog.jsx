import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListPosts from './ListPosts/ListPosts';

function Blog() {
    return (
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 5,
        }}>
            <Typography
                variant="h1"
                fontWeight={600}
                lineHeight={1.3}
                fontSize={'2rem'}
            >
                Bài viết nổi bật
            </Typography>
            
            <ListPosts />
        </Box>
    )
}

export default Blog
