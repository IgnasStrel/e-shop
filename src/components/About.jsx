import Carousel from "react-bootstrap/Carousel";
import data from "../data/products";
import OneProduct from "./OneProduct";

const About = () => {
  console.log(data);
  return (
    <Carousel variant="dark">
      {data.map((OneProduct, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={OneProduct.imageUrl}
            alt={OneProduct.name}
          />
          <Carousel.Caption>
            <h3>{OneProduct.name}</h3>
            <p>{OneProduct.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default About;
