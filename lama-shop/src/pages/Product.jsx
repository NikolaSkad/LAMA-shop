import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import image from "../images/denim.jpg";
import { mobile } from "../responsive";

const Container = styled.div``;

const MobileDiv = styled.div`
  display: none;
  ${mobile({ display: "block", marginBottom: "5px" })}
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  ${mobile({ height: "40%", marginBottom: "20px" })}
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
  margin: 30px 0;
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
  background-color: ${({ color }) => color};
  margin-left: 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid teal;

  &:active,
  &:focus {
    outline: none;
  }
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
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
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f8f4f4;
    transform: scale(1.1);
  }
`;

const Product = () => {
  const [amount, setAmount] = useState(1);

  return (
    <Container>
      <NavBar />
      <MobileDiv />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae repellendus dolorum natus tempore odit. Officiis dolorem
            sed nulla at, nobis tempora, voluptatum id odio maxime nam, sit
            numquam blanditiis!
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
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
              <Remove
                onClick={() => {
                  if (amount !== 1) setAmount(amount - 1);
                }}
                style={{ cursor: "pointer" }}
              />
              <Amount>{amount}</Amount>
              <Add
                onClick={() => {
                  if (amount !== 100) setAmount(amount + 1);
                }}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button>ADD TO CARD</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
