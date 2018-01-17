import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createComment} from 'store/comment/actions';

class NewComment extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const postId = this.props.match.params.postId;
    const commendBody = e.target.body.value;
    const author = e.target.author.value;

    const submitComment = {
      parentId: postId,
      timestamp: Date.now(),
      body: commendBody,
      author: author,
    };
    this.props.createComment(submitComment, postId, () =>
      this.props.history.push(`/post/${postId}`)
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul className="form-style-1">
          <li>
            <label>
              Name <span className="required">*</span>
            </label>
            <input type="text" name="author" className="field-long" />
          </li>
          <li>
            <label>
              Comment <span className="required">*</span>
            </label>
            <textarea
              name="body"
              id="field5"
              className="field-long field-textarea"
            />
          </li>
          <button>Submit</button>
        </ul>
      </form>
    );
  }
}

function mapStateToProps({posts, categories}) {
  return {
    posts: posts,
  };
}

export default connect(mapStateToProps, {createComment})(NewComment);
