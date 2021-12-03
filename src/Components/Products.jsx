import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
   
   
   display: flex;
  flex-wrap: wrap;

 
`
const TitleWrapper = styled.div`
display: flex;
justify-content: center;
`
const Title = styled.h1` 
font-weight: 400;
font-style: oblique;
font-size: 22px;
font-weight: 800;
`

const Products = () => {

    const [fetchedProducts, setFetchedProducts] = React.useState([])

    React.useEffect(() => {

        const getProducts = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/api/products")
                console.log(data);
                setFetchedProducts([...data])

            } catch (err) {
                console.log(err);
            }


        }
        getProducts();

    }, [])
    console.log(fetchedProducts);
    if (fetchedProducts) {
        return (
            <>

                <TitleWrapper>
                    <Title> Products </Title>

                </TitleWrapper>

                <div className="w-screen mx-8 ">

                    <Container>
                        {
                            popularProducts.map((item) => (
                                <Link to={`/product/${item.id} `} style={{ textDecoration: 'none' }}>
                                    <Product item={item}></Product>
                                </Link>
                            ))
                        }

                    </Container>
                </div>
            </>
        )
    }
    else {
        return (
            <>....Loading</>
        )
    }
}

export default Products
