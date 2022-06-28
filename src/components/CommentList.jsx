/** @format */

import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      this.props.allComments &&
      this.props.allComments.map((comment) => (
        <li key={comment._id}>
          <SingleComment bookComment={comment} />
        </li>
      ))
    );
  }
}

export default CommentList;
