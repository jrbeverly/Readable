import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {toLocaleTimestamp} from 'globalization/locale';
import VoteButton from 'components/VoteButton';
import {Container, Row, Col} from 'react-grid-system';
import * as actions from 'store/comment/actions';

/**
 * @description Represents a vote button.
 */
class Comment extends Component {
  onCommentDelete = comment => {
    let parentId = comment.parentId;
    this.props.deleteComment(comment.id, () => {
      this.props.history.push(`/post/${parentId}`);
      this.props.fetchComments(parentId);
    });
  };

  render() {
    const {comment, post} = this.props;

    const onVoteUp = () => {
      this.props.voteComment(comment.id, comment.parentId, 'upVote');
    };

    const onVoteDown = () => {
      this.props.voteComment(comment.id, comment.parentId, 'downVote');
    };

    return (
      <div className="comment" key={comment.id}>
        <Container fluid style={{lineHeight: '32px', width: '45%'}}>
          <Row>
            <Col md={10}>
              <Row>
                <Col md={1}>
                  <VoteButton onVoteUp={onVoteUp} onVoteDown={onVoteDown}>
                    <div>{comment.voteScore}</div>
                  </VoteButton>
                </Col>
                <Col style={{display: 'flex'}} md={11}>
                  <div>
                    <p>{comment.body}</p>
                    <div>
                      Submitted at {toLocaleTimestamp(comment.timestamp)} by {comment.author}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col style={{display: 'left'}} md={2}>
              <Row>
                <Link to={`/${post.category}/${comment.parentId}/${comment.id}/edit`}>
                  Edit
                </Link>
              </Row>
              <Row>
                <button onClick={e => this.onCommentDelete(comment)}>Delete</button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({comments}) {
  return {
    comments: comments,
  };
}

export default connect(mapStateToProps, actions)(Comment);
