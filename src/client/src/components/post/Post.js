import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon} from 'react-fa';

class Post extends Component {
  render() {
    const {post, comments, votePost} = this.props;

    return (
      <div>
        <div class="input-group-btn-vertical">
          <button class="btn btn-default" type="button">
            <Icon name="thumbs-up" />
          </button>
          <button class="btn btn-default" type="button">
            <Icon name="thumbs-down" />
          </button>
        </div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>{post.score} votes</p>
        <p>
          <b>Category: </b> {post.category}
        </p>
        <p>
          <b>Author: </b> {post.author}
        </p>
        <p>
          <b>Time: </b> {post.timestamp}
        </p>
      </div>
    );
  }
}

export default Post;
