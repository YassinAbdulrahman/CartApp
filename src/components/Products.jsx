import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container className="pt-5">
      <Row style={{ gap: "20px" }}  className="pt-5">
        {products.map((product)=>{
          return(
            <Col key={product.id}>
            <Card style={{ width: "18rem" }}> 
              <Card.Img variant="top" src={product.image} style={{ width: "200px", height: "200px" , margin:"auto" , objectFit:"scale-down"}}/>
              <Card.Body>
                <Card.Title>{product.title.slice(0,50)}...</Card.Title>
                <Card.Text>
                  {product.description.slice(0,100)}...
                </Card.Text>
                <Card.Text>
                  {product.price}
                </Card.Text>
                <Card.Text>
                  {product.category}
                </Card.Text>
                <Button variant="primary" onClick={() => {dispatch(addToCart(product))}}>Add to Cart</Button>
              </Card.Body>
            </Card>{" "}
           </Col>
          )
        })}
       
      </Row>
    </Container>
  );
}

export default Products;
