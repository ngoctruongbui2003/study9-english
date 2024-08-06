import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function SignUp() {
    return (
        <Container
            maxWidth="sm"
            sx={{
                width: '100%',
                maxWidth: '1170px',
                paddingTop: '2rem',
                paddingBottom: '3rem',
            }}
        >
            <Box p={5} sx={{
                maxWidth: '500px',
                border: '1px solid #e0e0e0',
                borderRadius: '.65rem',
                boxShadow: '0 4px 0 0 rgba(143, 156, 173, .2)',
            }}>
            
                <Typography variant="span">
                    Đăng ký ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
                </Typography>

                <Grid container py={3}>
                    <Grid item xs={12} pb={3}>
                        <Button variant="outlined" sx={{ width: '100%' }}>Đăng ký với Facebook</Button>
                    </Grid>
                    <Grid item xs={12} pb={3}>
                        <Button variant="outlined" sx={{ width: '100%', color: 'red' }}>Đăng ký với Google</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" sx={{ width: '100%', color: 'black' }}>Đăng ký với Github</Button>
                    </Grid>
                </Grid>

                <Box display={'flex'} flexDirection={'column'}>
                    <Typography variant="span" pb={2}>
                        Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và điều khoản bảo mật.
                    </Typography>
                    <Link href="/login">Đã có tài khoản? Đăng nhập ngay!</Link>   
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp
