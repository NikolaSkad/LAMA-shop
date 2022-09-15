import styled from "styled-components";
import { mobile } from "../responsive";

const Login = () => {
  const Contanier = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;
    ${mobile({ width: "75%", textAlign: "center" })}
  `;

  const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;

  const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
  `;

  const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    color: #fff;
    margin-bottom: 10px;
    ${mobile({ width: "100%", marginTop: "10px" })}
  `;

  const Link = styled.a`
    margin: 5px 0px;
    font-style: 12px;
    text-decoration: underline;
    cursor: pointer;
  `;

  return (
    <Contanier>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Contanier>
  );
};

export default Login;
