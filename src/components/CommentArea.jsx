/** @format */

import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      const url =
        "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.asin;

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTU5ODQ3NTAsImV4cCI6MTY1NzE5NDM1MH0.eq4eTFEZTokG0XppZERDfyrOXMSWXsviQ2Is8_YCqN4",
        },
      });
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
      <div>
        {this.state.comments && <CommentList allComments={this.comments} />}
      </div>
    );
  }
}

export default CommentArea;
