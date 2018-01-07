import React, {Component} from 'react';
import VoteButton from '../controls/VoteButton';
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const {post} = this.props;

    return (
      <div>
        <div>
          <VoteButton>
            <div className="votes">{post.score}</div>
          </VoteButton>
          <Link to={`/${post.category}/${post.id}`}>
            <div className="post-title">
              <h3>{post.title}</h3>
            </div>
          </Link>
          <div className="post-body">
            <p>{post.body}</p>
          </div>
        </div>
        <div>
          <div className="post-author">
            <p>
              <b>Category: </b> {post.category}
            </p>
          </div>
          <div className="post-author">
            <p>
              <b>Author: </b> {post.author}
            </p>
          </div>
          <div className="post-author">
            <p>
              <b>Time: </b> {post.timestamp}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
