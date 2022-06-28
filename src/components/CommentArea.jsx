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
      this.fetchComments(this.props.asin);
    }
  };
  fetchComments = async (asin) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
        {
          method: "GET",
          headers: {
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzMzk4MjdmZmQ0OTAwMTU4YTdhOTkiLCJpYXQiOjE2NTU5ODgwMTMsImV4cCI6MTY1NzE5NzYxM30.uQGe2ERfSABRxFLzCUKoCFbg5TV6X0us_P_-TI9n-Us",
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
                    <Card.Text>CommentArea:{comment.comment}</Card.Text>
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
