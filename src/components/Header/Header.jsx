import React from 'react'
import { WrapperAppbarText } from './style';
import AppbarText from './AppbarText/AppbarText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <Box px={3} sx={{
      width: '100%',
			height: '60px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			overflowX: 'auto',
			bgcolor: '#fff',
      borderBottom: '1px solid #e0e0e0',
    }}>
      {/* Icon Study9 */}
      <Box sx={{
        flexGrow: 4
      }} >
          <Typography
            onClick={() => navigate('/')}
						variant='h3'
						sx={{
							fontWeight: 'bold',
              color: '#000',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '2px',
						}}
					>
						Study9
					</Typography>
      </Box>
      <Box sx={{
        flexGrow: 6,
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        gap: 2
      }}>
        <AppbarText />

        {/* Sign in */}
        <Button variant="contained" onClick={() => navigate('/login')}>
          Đăng nhập
        </Button>

        {/* User
        <WrapperAppbarText>
          <Typography variant='span'>User</Typography>
        </WrapperAppbarText> */}
      </Box>
      
    </Box>
  )
}

export default Header
