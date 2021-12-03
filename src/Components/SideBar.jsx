import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
background-color: #3c233f;
height: 100%;
width: 100vw;
align-items: center;
padding-top: 10px;
border-radius: 15px;
${tw`margin[5px]  `}
`
const Links = styled.div`
display: flex;
justify-content: center;

width: 100%;
padding: 10px;
height: 100%;
align-items: center;
border-radius: 5px;
text-align: center;
`
const Title = styled.div`
display: flex;
padding-bottom: 10px;
font-size: 22px;
font-weight: 800;
justify-content: center;
color: #ffffff;
`
const Link = styled.button`
color: #ffffff;
margin: 10px;
padding: 15px;
border: 2px solid wheat;
border-radius: 20px;
cursor: pointer;

${tw` lg:font-bold md:font-size[x-small] sm:font-thin hover:font-black `}
`


const SideBar = ({ setSection, section }) => {
    const [line, setLine] = React.useState(0)
    React.useEffect(() => {


    }, [section])
    return (
        <Container>
            <Title>HERE IS SOME OF MY WORK</Title>
            <Links>
                <Link onClick={() => { setSection("animation") }}>Animation</Link>
                <Link onClick={() => { setSection("sketches") }}> Sketches</Link>
                <Link onClick={() => { setSection("art") }}>Art Work</Link>
            </Links>

        </Container>
    )
}

export default SideBar
