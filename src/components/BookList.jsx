/** @format */

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.books &&
            this.props.books.map((book) => (
              <Col sm={6} md={3}>
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
