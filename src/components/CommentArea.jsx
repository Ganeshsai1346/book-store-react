/** @format */

import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = () => {
    if (this.props.asin) this.fetchComments(this.props.asin);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.asin && prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  };
  fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTU5ODQ3NTAsImV4cCI6MTY1NzE5NDM1MH0.eq4eTFEZTokG0XppZERDfyrOXMSWXsviQ2Is8_YCqN4",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        alert("Something happened!");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <h1>Book comments</h1>
          {this.state.comments &&
            this.state.comments.map((comment, index) => (
              <Col md={6} key={index}>
                <Card className="mb-2 text-dark">
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      Rating ={comment.rate}
                    </Card.Subtitle>
                    <Card.Text>{comment.comment}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
