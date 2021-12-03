import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { popularProducts } from '../data'
import Project from './Project'


const Container = styled.div`
height: auto;
width:100%;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
${tw`
grid grid-cols-3
   md:grid-cols-1
  
    
`}
`


const Projects = () => {
    return (
        <Container >
            {
                popularProducts.map((item) => (
                    <Link to={`/product/${item.id} `} style={{ textDecoration: 'none' }}>
                        <Project item={item}></Project>
                    </Link>
                ))
            }

        </Container>
    )
}

export default Projects
