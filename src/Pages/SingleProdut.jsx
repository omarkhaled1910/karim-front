import React from 'react'
import { mobile } from "../responsive";
import { useDispatch } from 'react-redux';
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useParams } from 'react-router';
import { addproduct } from '../Redux/cartSlice';
import axios from 'axios'

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const ButtonAmount = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
`

const SingleProdut = () => {

  const pramas = useParams();
  const [amount, setAmount] = React.useState(1)
  const [product, setproduct] = React.useState({})
  const dispatch = useDispatch();

  React.useEffect(() => {

    const getProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/api/products/${pramas.pid}`)
        setproduct(data)
      } catch (err) {
        console.log(err);
      }
    }

    getProduct();
  }, [])

  console.log(product, pramas);

  const handleclick = () => {

    const payload = {
      quantity: amount,
      product: { id: pramas.pid, productamount: amount },
      price: price,
    }

    dispatch(addproduct({ ...payload }))
  }
  const price = 20

  return (
    <>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ {price} </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <ButtonAmount onClick={() => setAmount(amount - 1)}>
                <Remove />
              </ButtonAmount>

              <Amount>{amount}</Amount>
              <ButtonAmount onClick={() => setAmount(amount + 1)}>
                <Add />
              </ButtonAmount>

            </AmountContainer>
            <Button onClick={handleclick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

    </>
  )
}

export default SingleProdut
