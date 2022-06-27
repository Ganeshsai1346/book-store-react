/** @format */

import { Component } from "react";

class SingleComment extends Component {
  render() {
    return <li>{this.props.bookComment.comment}</li>;
  }
}
export default SingleComment;
