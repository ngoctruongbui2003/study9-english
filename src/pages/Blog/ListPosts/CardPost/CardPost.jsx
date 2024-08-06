import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { WrapperAuthorInfoText, WrapperBlogTopicText, WrapperCard } from './style';

function CardPost() {
    return (
        <WrapperCard>
            <Tooltip title="placeholder">
                <img src="https://via.placeholder.com/150" alt="placeholder" style={{cursor: 'pointer'}} />
            </Tooltip>

            <Box display={'flex'} flexDirection={'column'} gap={'.75rem'}>
                <Tooltip title="placeholder">
                    <WrapperBlogTopicText>5 Điều bạn có thể chưa biết về Việt Nam tại đấu trường Olympic</WrapperBlogTopicText>
                </Tooltip>
                <Typography variant='span'>Cùng Vietcetera dành thời gian tìm hiểu vài điều thú vị về đội tuyển Việt Nam qua các kỳ Olympic từ trước đến nay.</Typography>
            
                <Box display={'flex'}>
                    <Avatar sx={{ bgcolor: deepOrange[500], mr: '12px' }} >N</Avatar>
                    <WrapperAuthorInfoText>
                        <Typography variant='span' pb={.5}>Ngọc Trường Bùi</Typography>
                        <Typography variant='span'>19/09/2024</Typography>
                    </WrapperAuthorInfoText>
                </Box>
            </Box>
        </WrapperCard>
    )
}

export default CardPost
