import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' }
  }
  handleChange(e) {
    this.setState({ comment: e.target.value })
  }
  render () {
    return (
      <div className='comment-box'>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button>Submit Comment</button>
      </div>
    )
  }
}

export default CommentBox;
