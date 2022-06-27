/** @format */

import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card
        id="card"
        key={this.props.book.asin}
        onClick={(e) => this.props.showComments(e.target.comment)}>
        <Card.Img
          className="card-img"
          variant="top"
          src={this.props.book.img}
        />
        <Card.Body>
          <Card.Text className="card-title text-dark text-center mt-2">
            {this.props.book.title}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
