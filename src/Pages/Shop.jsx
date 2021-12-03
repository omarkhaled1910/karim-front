import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

const Container = styled.div`
   display: flex;
   flex-direction: column;


`
const FilterWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 40%;
margin: 16px;

`

const Filter = styled.div`
display: flex;
align-items: center;


`

const Title = styled.h1` 
font-weight: 400;
font-style: oblique;
margin: auto;
padding: 10px;

`
const FilterTitle = styled.h2`
font-size: 22px;
`
const Option = styled.option``

const Select = styled.select`
border: 2px soild black;
background-color: transparent;
margin-left: 10px;
height: 20px;
border-radius: 5px;
font-size: 16px;
padding-bottom: 3px;
`

const Shop = () => {
    return (
        <>
            <Slider></Slider>
            <Container>
                <Title>Check Our Latest PRODUCTS</Title>

                <FilterWrapper>
                    <Filter>
                        <FilterTitle>  Products : </FilterTitle>

                        <Select>
                            <Option selected> cloth </Option>
                            <Option> art </Option>
                            <Option> others </Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterTitle>  Size : </FilterTitle>
                        <Select>
                            <Option selected>size</Option>
                            <Option>s </Option>
                            <Option> m</Option>
                            <Option>l</Option>
                        </Select>
                    </Filter>

                </FilterWrapper>
            </Container>


            <Products />
        </>
    )
}

export default Shop
