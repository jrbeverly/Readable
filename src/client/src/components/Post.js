import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toLocaleTimestamp} from 'globalization/locale';
import {Link} from 'react-router-dom';
import {votePost, fetchAllPosts} from 'store/post/actions';
import {fetchComments} from 'store/comment/actions';
import VoteButton from 'components/VoteButton';
import {Container, Row, Col} from 'react-grid-system';

class Post extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.post.id);
  }

  render() {
    const {post, comments, votePost, fetchAllPosts} = this.props;

    return (
      <div>
        {post && (
          <div className="post">
            <Container fluid className="post-body">
              <Row>
                <Col md={1}>
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
                    <Col md={3}>
                      <Link to={`/${post.category}/${post.id}`}>
                        {comments && comments ? comments.length : 0} comments
                      </Link>
                    </Col>
                    <Col md={3}>{post.category}</Col>
                    <Col md={6}>
                      Submitted at {toLocaleTimestamp(post.timestamp)} by {post.author}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({comments}, {post}) {
  return {
    comments: comments[post.id],
  };
}

export default connect(mapStateToProps, {
  votePost,
  fetchAllPosts,
  fetchComments,
})(Post);
