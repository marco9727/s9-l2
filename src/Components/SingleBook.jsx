import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  cardSelected() {
    if (this.state.selected) {
      return "border-danger";
    } else {
      return " ";
    }
  }
  render() {
    // const { book } = this.props;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={this.props.book.asin}
            style={{ marginBottom: "20px" }}
          >
            <Card className={`h-100 ${this.cardSelected()}`}>
              <Card.Img
                variant="top"
                src={this.props.book.img}
                className="img-fluid"
                style={{ height: "250px", objectFit: "contain" }}
                onClick={this.handleClick}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text>
                  <ul className="list-unstyled ">
                    <li>prezzo: {this.props.book.price} €</li>
                    <li>categoria: {this.props.book.category}</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" className="mt-auto">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
