import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  color: #a39696;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${({ color }) => color};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Centrer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  color: #a39696;

  &:hover {
    transform: scale(1.02);
    color: #000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #a39696;
`;

const Paymeny = styled.img`
  width: 200px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          autem tempora. Maiores debitis recusandae dicta magnam hic enim
          accusamus nostrum aspernatur inventore ad alias.
        </Desc>
        <SocialContainer>
          <SocialIconContainer color="3B5999">
            <FacebookIcon />
          </SocialIconContainer>
          <SocialIconContainer color="E4405F">
            <InstagramIcon />
          </SocialIconContainer>
          <SocialIconContainer color="55ACEE">
            <TwitterIcon />
          </SocialIconContainer>
          <SocialIconContainer color="E60023">
            <PinterestIcon />
          </SocialIconContainer>
        </SocialContainer>
      </Left>
      <Centrer>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Centrer>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px", color: "black" }} />{" "}
          XXVII Marta 27/3, Belgrade, Serbia
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px", color: "black" }} />{" "}
          +381 61 234 567
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px", color: "black" }} />{" "}
          contact@lama.com
        </ContactItem>
        <Paymeny src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" />
      </Right>
    </Container>
  );
};

export default Footer;
