import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import items from "../data/scifi.json";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Books extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {items.map((book) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={book.asin}
              style={{ marginBottom: "20px" }}
            >
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={book.img}
                  className="img-fluid"
                  style={{ height: "250px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <ul className="list-unstyled ">
                      <li>prezzo: {book.price} €</li>
                      <li>categoria: {book.category}</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Books;
