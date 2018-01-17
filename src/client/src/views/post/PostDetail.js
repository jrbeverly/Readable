import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toLocaleTimestamp} from 'globalization/locale';
import {Link} from 'react-router-dom';
import {fetchComments} from 'store/comment/actions';
import {fetchAllPosts, votePost, deletePost} from 'store/post/actions';
import VoteButton from 'components/VoteButton';
import {Container, Row, Col} from 'react-grid-system';
import Comment from 'components/Comment';
import _ from 'lodash';

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
    this.props.fetchComments(this.props.match.params.postId);
  }

  onPostDelete = () => {
    const id = this.props.match.params.postId;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const {post, comments, votePost, fetchAllPosts} = this.props;
    if (!post) {
      return <div>404 Post Not Found</div>;
    }
    return (
      <div>
        {post && (
          <div key={post.id}>
            <Container fluid style={{lineHeight: '32px', width: '40%'}}>
              <Row>
                <Col md={9}>
                  <Row>
                    <Col md={2}>
                      <div>
                        <VoteButton
                          onVoteUp={() => {
                            votePost(post.id, 'upVote');
                            fetchAllPosts();
                          }}
                          onVoteDown={() => {
                            votePost(post.id, 'downVote');
                            fetchAllPosts();
                          }}
                        >
                          <div>{post.voteScore}</div>
                        </VoteButton>
                      </div>
                    </Col>
                    <Col md={10}>
                      <Row>
                        <Link to={`/${post.category}/${post.id}`}>
                          <div>
                            <h3>{post.title}</h3>
                          </div>
                        </Link>
                      </Row>
                      <Row>
                        <div>
                          <p>{post.body}</p>
                        </div>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <Link to={`/${post.category}/${post.id}`}>
                            {comments && comments ? comments.length : 0}{' '}
                            comments
                          </Link>
                        </Col>
                        <Col md={3}>{post.category}</Col>
                        <Col md={6}>
                          Submitted at {toLocaleTimestamp(post.timestamp)} by{' '}
                          {post.author}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <br />
                </Col>
                <Col md={3}>
                  <Row>
                    <Link to={`/${post.category}/${post.id}/comment`}>Add</Link>
                  </Row>
                  <Row>
                    <Link to={`/${post.category}/${post.id}/edit`}>Edit</Link>
                  </Row>
                  <Row>
                    <a href="/" onClick={e => this.onPostDelete(e)}>
                      Delete
                    </a>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {post &&
          comments && (
            <div>
              <hr />
              {comments.map(comment => (
                <Comment
                  comment={comment}
                  post={post}
                  key={comment.id}
                  history={this.props.history}
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps({posts, comments}, props) {
  console.log(props);
  const post = _.find(posts, {id: props.match.params.postId});
  return {
    post: post,
    comments: comments[props.match.params.postId],
  };
}

export default connect(mapStateToProps, {
  fetchAllPosts,
  votePost,
  deletePost,
  fetchComments,
})(PostDetail);
