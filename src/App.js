import "bootstrap/dist/css/bootstrap.min.css";

import MyHeader from "./components/MyHeader";
import About from "./components/About";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <Container>
        <ProductList />
      </Container>
    </div>
  );
};

export default App;
