import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
opacity: 0;
position: absolute;
background-color: #b92b2b7f;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
width: 100%;
height: 100%;
z-index:3;
transition: all 0.5s ease;  
bottom: 0px;
`

const Container = styled.div`
flex: 1;
margin: 5px;
 /* min-width: 400px; */
   height: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #8c87b9;
   position: relative;
   margin-bottom: 20px;
   margin-top: 10px;
    &:hover  ${Info}{
    opacity: 1;
   }

   
`

//
const Image = styled.img`
height: 75%;

`

const Name = styled.div`

color: #af9a9a;
font-weight: 600;
font-size: 24px;

padding: 10px;
border-top: 2px solid white;
width: 100%;
`
const Date = styled.div`

color: #9b8a8a;
font-weight: 600;
font-size: 22px;
padding: 5px;

`

const Project = ({ item }) => {
    return (
        <Container>

            <Image alt="" src={item.img ? item.img : "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Image>

            <Info>
                <Name>MOVIE NAME</Name>
                <Date> 26 SEP 2019</Date>

            </Info>

        </Container>
    )
}

export default Project
