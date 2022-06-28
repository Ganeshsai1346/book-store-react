/** @format */

import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card
        id="card"
        onClick={() => {
          this.props.showComments(this.props.book.asin);
        }}>
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
