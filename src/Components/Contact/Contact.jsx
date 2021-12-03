import { useState } from "react";
import styled from 'styled-components'
import handshake from '../../images/handshake.jpg'


const BoxContainer = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  margin-top: 10px;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid white ;
  justify-content: space-around;
  background-color: #065255;
  
`;
const Left = styled.div`
  flex:1;
  margin: 10px;
  
`
const Right = styled.div`
    flex:1;
  
    display: flex;
    flex-direction: column;
    align-items: center;
  
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
    justify-content: space-between;
  
`;


const Area = styled.textarea`
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  height: 100px;
  width: 70%;
  margin-bottom: 20px;
  border-radius: 10px;
  font-weight: 500;
  padding:20px;
`;
const Image = styled.img`
  margin: 0 4px;
  height: 100%;
  width: 100%;
  /* margin-bottom: 20px; */
  border-radius: 10px;

`;

const Input = styled.input`
  width: 40%;
  height: 42px;
  outline: none;
  border: 1px solid black;
  padding: 0px 10px;
  font-size:22px;
  font-weight: 600;
  /* transition: all 200ms ease-in-out; */
  font-size: 12px;
  border-radius: 15px;
  margin-bottom: 15px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(145, 36, 3);
  }
`;

const SubmitButton = styled.button`
  margin: 20px;
  padding: 20px 40px ;
  color: #fff;
  font-size: 15px;
  font-weight: 600;

  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(6, 195, 253);
  background: linear-gradient(
    58deg,
    #045caf 20%,
    #050141 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;
const Title = styled.div`
  color: #7fcae7;
  font-size: 28px;
  font-weight: 700;
  margin: 10px;
  padding: 10px;
`

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <BoxContainer >
      <Left >
        <Image src={handshake} alt="" />s
      </Left>
      <Right >
        <Title>LETS WORK TOGHTER.</Title>
        <FormContainer onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Email" />
          <Area placeholder="Write Your Message Here"></Area>
          <SubmitButton type="submit">Send</SubmitButton>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </FormContainer>
      </Right>
    </BoxContainer>
  );
}