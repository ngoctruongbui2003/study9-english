import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { WrapperIcon } from './style';

function CardTest() {
    return (
        <Card
            variant="outlined"
            sx={{
                mb: 2,
                border: '1px solid #e0e0e0',
                borderRadius: '.65rem',
                boxShadow: '0 4px 0 0 rgba(143, 156, 173, .2)',
                p: 1
            }}
        >
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Test name */}
                <Typography variant="span" fontWeight={700}>
                    TOEIC Test 1
                </Typography>
                {/* Side infor */}
                <Box sx={{ fontSize: '.9rem', fontWeight: '500', color: '#677788' }}>
                    <Box>
                        <WrapperIcon><AccessTimeIcon fontSize='small' /></WrapperIcon>
                        <Typography variant="span" sx={{ fontSize: '.9rem' }}>40 phút</Typography>
                    </Box>
                    <Box>
                        <WrapperIcon><PermIdentityIcon fontSize='small' /></WrapperIcon>
                        <Typography variant="span" sx={{ mr: '1rem' }}>210000</Typography>
                        <WrapperIcon><ChatBubbleOutlineIcon fontSize='small' /></WrapperIcon>
                        <Typography variant="span">2121</Typography>
                    </Box>
                    <Box>
                        <Typography variant="span">4 phần thi | 200 câu hỏi</Typography>
                    </Box>
                </Box>
                
            </CardContent>
            <CardActions>
                <Button fullWidth variant="outlined" size="small" sx={{
                    ":hover": {
                        color: '#fff',
                        bgcolor: 'primary.main',
                        borderColor: '#35509a',
                    }
                }}>Chi tiết</Button>
            </CardActions>
        </Card>
    )
}

export default CardTest
