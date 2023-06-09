import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React E-Shop</Navbar.Brand>

        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="products" className="nav-link">
            Products
          </Link>
          <Link to="cart" className="nav-link">
            Cart
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyHeader;
