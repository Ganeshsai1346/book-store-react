/** @format */

import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      this.props.allComments &&
      this.props.allComments.map((comment) => (
        <SingleComment bookComment={comment} />
      ))
    );
  }
}

export default CommentList;
