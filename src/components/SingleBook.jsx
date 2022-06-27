/** @format */

import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        id="card"
        key={this.props.book.asin}
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          border: this.state.selected ? "4px solid red" : "none",
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
