import "bootstrap/dist/css/bootstrap.min.css";

import MyHeader from "./components/MyHeader";
import About from "./components/About";
import { Container } from "react-bootstrap";
import OneProduct from "./components/OneProduct";

const App = () => {
  return (
    <div>
      <Container>
        <MyHeader />
        <About />
        <OneProduct />
      </Container>
    </div>
  );
};

export default App;
