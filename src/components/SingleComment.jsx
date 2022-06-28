/** @format */

import { Component } from "react";

class SingleComment extends Component {
  render() {
    return <>{this.props.bookComment.comment}</>;
  }
}
export default SingleComment;
