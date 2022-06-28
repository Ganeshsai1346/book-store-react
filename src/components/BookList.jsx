/** @format */

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container>
        <h1>All Books</h1>
        <Row>
          {this.props.books &&
            this.props.books.slice(0, 8).map((book) => (
              <Col sm={6} md={3} key={book.asin}>
                <SingleBook
                  book={book}
                  showComments={this.props.showComments}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
