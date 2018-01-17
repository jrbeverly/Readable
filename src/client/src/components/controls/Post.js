import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {votePost, fetchAllPosts} from 'store/post/actions';
import {fetchCommentForPost} from 'store/comment/actions';
import VoteButton from 'components/controls/VoteButton';
import {Container, Row, Col} from 'react-grid-system';

class Post extends Component {
  render() {
    const {post} = this.props;

    return (
      <div>
        {post && (
          <div className="post">
            <Container fluid style={{lineHeight: '32px', width: '40%'}}>
              <Row>
                <Col md={1}>
                  <div className="post-likes">
                    <VoteButton onVoteUp={() => {}} onVoteDown={() => {}}>
                      <div className="post-score">{post.voteScore}</div>
                    </VoteButton>
                  </div>
                </Col>
                <Col md={10}>
                  <Row>
                    <Link to={`/${post.category}/${post.id}`}>
                      <div className="post-title">
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
                      Submitted at {post.timestamp} by {post.author}
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
})(Post);
