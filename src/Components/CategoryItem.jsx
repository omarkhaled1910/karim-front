import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
flex: 1;
position: relative;
height: 60vh;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const Info = styled.div` 
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`

    color: white;

`
const Button = styled.button`
padding: 10px;
border: none;
font-weight: 500;
color: #a19999;
`



const CategoryItem = ({ item }) => {


    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>

            </Info>

        </Container>
    )
}

export default CategoryItem
