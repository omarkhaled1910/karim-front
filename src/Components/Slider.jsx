import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../data';

const Container = styled.div`
height: 100vh;
width: 100vw;
position: relative;
display: flex;
overflow: hidden;

`
const Arrow = styled.div`
width: 50px;
height:50px;
background-color: #f80808;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
position: absolute;
top:0;
bottom: 0;
left:${props => props.direction === "left" && "20px"} ;
right: ${props => props.direction === "right" && "20px"};
margin: auto;
cursor: pointer;
opacity: 0.8;

`
const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX( ${(props) => props.slideIndex * -100}vw);
transition: all 1.5s ease;
`

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: ${(props) => props.bg};
`
const ImageContiner = styled.div`

height: 90%;
margin-left: 5px;
 flex: 1;
  img {
     height: 90%;
     width: 50vw;
     border-radius: 20px;
    }
`
const InfoContainer = styled.div`

padding: 50px;
flex: 1;
`
const Title = styled.h2`
font-weight:400;
font-size: 60px;
`
const Desc = styled.p`
margin:25px ;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`
const Button = styled.button`
padding: 10px;
font-size: 20 px;
background-color: transparent;
cursor: pointer;
margin-top: 30px;
`

const Slider = () => {
    const [slideIndex, setslideIndex] = React.useState(1)

    const handleclick = (dir) => {
        if (dir === "left") {
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>


            <Wrapper slideIndex={slideIndex}>

                {sliderItems?.map((item) => (

                    <Slide bg={item.bg}>
                        <ImageContiner>
                            <img src={item.img} alt="" />
                        </ImageContiner>
                        <InfoContainer>
                            <Title>
                                {item.title}
                            </Title>
                            <Desc>
                                {item.desc}
                            </Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="left" onClick={() => handleclick("left")}>
                <ArrowBackIosNewIcon />
            </Arrow>

            <Arrow direction="right" onClick={() => handleclick("right")}>
                <ArrowForwardIosIcon />
            </Arrow>

        </Container>
    )
}

export default Slider
