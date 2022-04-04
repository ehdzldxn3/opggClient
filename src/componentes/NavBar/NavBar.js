import React from 'react';
import { Nav } from 'react-bootstrap'

function NavBar() {
    return (
    //     <AppBar position="static" color='inherit'>
    //     <Container maxWidth="xl">
    //       <Toolbar disableGutters>
    //         <Typography
    //           variant="h6"
    //           noWrap
    //           component="div"
    //           sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
    //         >
    //           LOGO
    //         </Typography>
    //       </Toolbar>
    //     </Container>
    //   </AppBar>

        <div  style={{backgroundColor : '#5383E8'}}>
            <h1 style={{display:'flex', position: 'relative', color:'white', paddingLeft:'2vh'}}>
                LEAGUE of LEGENDS OP.GG Clone
            </h1>
            <Nav style={{justifyContent: 'start', display:'flex'}}>
                <Nav.Item>
                    <Nav.Link href="/" style={{}}>
                        <p style={{color: 'white', }}>홈</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/"><p style={{color: 'white'}}>챔피언분석</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/"><p style={{color: 'white'}}>칼바람</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/"><p style={{color: 'white'}}>우르프</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/"><p style={{color: 'white'}}>통계</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/"><p style={{color: 'white'}}>랭킹</p></Nav.Link>
                </Nav.Item>
            </Nav>
            <div style={{backgroundColor: '#2F5EC0', minheight: '4vh', justifyContent:'center', display:'flex'}}>
                이용약관이 어쩌고 저쩌고
            </div>
        </div>          
    )
}
export default NavBar