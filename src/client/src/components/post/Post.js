import React, {Component} from 'react';
import VoteButton from '../controls/VoteButton';

class Post extends Component {
  render() {
    const {post} = this.props;

    return (
      <div>
        <VoteButton>
          <div className="votes">{post.score}</div>
        </VoteButton>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
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
