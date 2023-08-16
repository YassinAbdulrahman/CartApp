import { Button, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Container className="pt-5">
        <h2 className="pt-3">Welcome to the Cart</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.title}</td>
                  <td><img src={element.image} alt={element.title} style={{ width: "200px", height: "200px" , margin:"auto" , objectFit:"scale-down"}}/></td>
                  <td>{element.price}</td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
