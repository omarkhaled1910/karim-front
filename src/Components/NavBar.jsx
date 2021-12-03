import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Redux/userSlice'

const Container = styled.div`
    
    height: 70px;
    border-bottom: 10px solid black;
    background-color: #ebebeb;
    overflow: hidden;

`
const Wrapper = styled.div`
padding: 15px 20px;
display: flex;
justify-content: space-between;
align-items: center;
justify-content: center;

`
const Left = styled.div`
flex: 1;
display: flex;
align-items:center ;
cursor: pointer;
justify-content: space-around;


`
const Name = styled.div`
font-size: 26px;
margin-right: 10px;
padding-left: 10px;
color: #5c09e2;
font-weight: 1000;


`
const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
padding-right: 5px;
align-items: center;
`
const Center = styled.div`
flex:1;
display: flex;
justify-content: center;
align-items: center;
`
const Links = styled.div`
cursor: pointer;
color: #000000;
margin: 5px;
font-size: 16px;
font-weight: 600;
`
const ShopLink = styled.div`
cursor: pointer;
display: flex;
color: #000000;
font-weight: 500;
font-size: 16px;
font-weight: 600;
`
const Button = styled.button`

border-radius: 14px;
background-color: #000000;
padding-left: 15px;
padding-right: 15px;
padding-top: 8px;
padding-bottom: 8px;;
margin-left: 20px;
cursor: pointer;
border: 2px solid white;
 color: #5c09e2;
font-size: 16px;
box-shadow: #000000;
font-weight: 600;
`
const WelcomeUser = styled.div`
color :white;

`
const LogoutButton = styled.button` 
border-radius: 14px;
background-color: #000000;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;;
margin-left: 20px;
cursor: pointer;
border: 2px solid white;
color: #5c09e2;
font-size: 16px;
box-shadow: #000000;
font-weight: 600;
`


const NavBar = () => {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const handlelogout = () => {
        console.log("logoutt");
        dispatch(logout())
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Name>keem </Name>
                    </Link>
                    <Link to="/events" style={{ textDecoration: 'none' }}>
                        <Links>
                            EVENTS
                        </Links>
                    </Link>
                    <Link to="/workshops" style={{ textDecoration: 'none' }}>
                        <Links>
                            WORKSHOPS
                        </Links>
                    </Link>
                    <Link to="/shop" style={{ textDecoration: 'none' }}>
                        <ShopLink>
                            {/* SHOP <ShoppingCartIcon>  </ShoppingCartIcon> */}
                            SHOP
                        </ShopLink>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Links>
                            ABOUT
                        </Links>
                    </Link>


                </Left>

                <Center>
                    <FacebookIcon></FacebookIcon>

                    <InstagramIcon />
                </Center>
                {!user && (<Right>


                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>

                    <Link to="/register">
                        <Button>Signup</Button>
                    </Link>


                </Right>)}
                {
                    user && (
                        <Right>
                            <WelcomeUser>welcome {user.name}</WelcomeUser>
                            <LogoutButton onClick={handlelogout}>LOGOUT</LogoutButton>
                        </Right>
                    )
                }

            </Wrapper>

        </Container>
    )
}

export default NavBar
