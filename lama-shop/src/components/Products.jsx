import styled from "styled-components";
import { popularProducts } from "../data";
import { mobile } from "../responsive";
import ProductItem from "./ProductItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ padding: "0 5px 5px 5px" })}
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
