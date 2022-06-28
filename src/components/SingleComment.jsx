/** @format */

import { Component } from "react";

class SingleComment extends Component {
  render() {
    return <div>{this.props.bookComment.comment}</div>;
  }
}
export default SingleComment;
