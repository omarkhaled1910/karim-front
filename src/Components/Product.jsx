import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';


const Info = styled.div`
opacity: 0;
position: absolute;
background-color: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
z-index:3;
transition: all 0.5s ease;  
`


const Container = styled.div`
flex: 1;
margin:5px;
 min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #9c7d42;
   position: relative;
   margin-bottom: 20px;
   margin-top: 10px;

   &:hover  ${Info}{
    opacity: 1;
   }
`
const Image = styled.img`
height: 75%;

`

const Icon = styled.div`
height: 40px;
width: 40px;
background-color: white;
margin: 10px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.5s ease;
&:hover{
    background-color: grey;
    transform: scale(1.1);
}
`




const Product = ({ item }) => {
    return (

        <Container>

            <Image alt="" src={item.img ? item.img : "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Image>

            <Info>
                <Icon>
                    <ShoppingCartIcon />
                </Icon>
                <Icon>
                    <FavoriteSharpIcon />
                </Icon>
                <Icon>
                    <SearchSharpIcon />
                </Icon>
            </Info>

        </Container>

    )
}

export default Product
