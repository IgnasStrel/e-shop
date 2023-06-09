import React from "react";
import products from "../data/products";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { data } from "browserslist";

const OneProduct = () => {
  return (
    <div className="d-inline-flex flex-wrap justify-content-center w-100">
      {products.map((product, index) => (
        <span>
          <Card
            className="m-3 border-secondary "
            style={{ width: "18rem", height: "40rem" }}
            key={index}
          >
            <Card.Img
              className="border-bottom border-secondary"
              variant="top"
              src={product.imageUrl}
              style={{ height: "10rem" }}
            />
            <Card.Body className="d-inline-flex flex-column justify-content-around">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text> {product.description}</Card.Text>
              <Card.Text> {product.price}$</Card.Text>
              <Button variant="dark">More info</Button>
            </Card.Body>
          </Card>
        </span>
      ))}
    </div>
  );
};
export default OneProduct;
