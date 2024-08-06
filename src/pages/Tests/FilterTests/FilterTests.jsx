import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Input from '../../../components/Input/Input'


function FilterTests() {
    const testExams = [
        {
            text: 'Tất cả',
            link: '/tests'
        },
        {
            text: 'IELTS Academic',
            link: '/tests'
        },
        {
            text: 'IELTS General',
            link: '/tests'
        },
        {
            text: 'TOEIC',
            link: '/tests'
        },
        {
            text: 'HSK1',
            link: '/tests'
        },
        {
            text: 'HSK2',
            link: '/tests'
        },
        {
            text: 'HK3',
            link: '/tests'
        },
        {
            text: 'HK4',
            link: '/tests'
        },
        {
            text: 'HK5',
            link: '/tests'
        },
        {
            text: 'HK6',
            link: '/tests'
        },
        {
            text: 'Tiếng Anh THPT',
            link: '/tests'
        },
        {
            text: 'Toán Anh THPT',
            link: '/tests'
        },
        {
            text: 'HSK1',
            link: '/tests'
        },
        {
            text: 'HSK2',
            link: '/tests'
        },
        {
            text: 'HK3',
            link: '/tests'
        },
        {
            text: 'HK4',
            link: '/tests'
        },
        {
            text: 'HK5',
            link: '/tests'
        },
        {
            text: 'HK6',
            link: '/tests'
        },
        {
            text: 'HSK1',
            link: '/tests'
        },
        {
            text: 'HSK2',
            link: '/tests'
        },
        {
            text: 'HK3',
            link: '/tests'
        },
        {
            text: 'HK4',
            link: '/tests'
        },
        {
            text: 'HK5',
            link: '/tests'
        },
        {
            text: 'HK6',
            link: '/tests'
        },
        {
            text: 'HSK1',
            link: '/tests'
        },
        {
            text: 'HSK2',
            link: '/tests'
        },
        {
            text: 'HK3',
            link: '/tests'
        },
        {
            text: 'HK4',
            link: '/tests'
        },
        {
            text: 'HK5',
            link: '/tests'
        },
        {
            text: 'HK6',
            link: '/tests'
        },
    ]


    return (
        <Grid container mb={5}>
            <Grid item xs={9} pb={3} sx={{ borderBottom: '1px solid #000' }}>
                <Box>
                    <Typography
                        variant="h1"
                        fontWeight={600}
                        lineHeight={1.3}
                        fontSize={'2rem'}
                    >
                        Thư viện đề thi
                    </Typography>

                    <Box display={'flex'} flexWrap={'wrap'} gap={2} pt={3}>
                        <Link
                            href={'#'}
                            underline={'none'}
                            color={'#35509a'}
                            bgcolor={'#e8f2ff'}
                            fontWeight={500}
                            borderRadius={3}
                            padding={'5px 10px'}
                        >
                            <Typography variant="span">Toeic 2024</Typography>
                        </Link>
                        {testExams.map((testExam, index) => (
                            <Link
                                key={index}
                                href={testExam.link}
                                underline={'none'}
                                color={'#000'}
                                padding={'5px 10px'}
                            >
                                <Typography variant="span">{testExam.text}</Typography>
                            </Link>
                        ))}
                    </Box>

                    <Box py={2}>
                        <Input 
                            placeholder={'Nhập từ khoá bạn muốn tìm kiếm: tên sách, dạng câu hỏi ...'}
                            fullWidth
                        />
                    </Box>

                    <Button variant="contained">Tìm kiếm</Button>
                </Box>
            </Grid>


            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default FilterTests
