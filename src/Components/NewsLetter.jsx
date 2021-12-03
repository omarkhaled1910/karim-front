import React from 'react'
import styled from 'styled-components'
import KeyboardTabSharpIcon from '@mui/icons-material/KeyboardTabSharp';

const Container = styled.div`
margin: 3px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 20px;
`
const Title = styled.div`
font-size: 60px;
margin: 15px;
`
const Desc = styled.div`
font-size: 24px;
font-weight:300;
margin-bottom: 20px;
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
border: 2px solid grey;
display: flex;
justify-content: space-between;
align-items: center;
`
const Input = styled.input`
border: none;
flex: 9;
padding-left: 20px;
height: 100%;

`
const Button = styled.button`
padding: 8px;
flex: 1;
background-color: teal;

`


const NewsLetter = () => {

    return (
        <Container>
            <Title>News </Title>
            <Desc> Get timely updates</Desc>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <KeyboardTabSharpIcon />

                </Button>
            </InputContainer>



        </Container>
    )
}

export default NewsLetter
