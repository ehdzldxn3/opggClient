import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function NavBar() {
    return (
        <div style={{backgroundColor: '#527ABD'}}>
            
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, alignSelf: 'flex-start' }}
                    style={{ paddingTop: '5px', color: 'white' }}
                >
                    <Link href="#" underline="none">
                    OP.GG LOGO 리그오브레전드
                    </Link>
                </Typography>
            
            asdf
        </div>
    )
}
export default NavBar