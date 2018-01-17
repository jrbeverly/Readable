import React from 'react';
import {Link} from 'react-router-dom';
import {toLocaleTimestamp} from 'globalization/locale';
import VoteButton from 'components/controls/VoteButton';
import {Container, Row, Col} from 'react-grid-system';

/**
 * @description Represents a vote button.
 */
const Comment = props => {
  const {comment} = props;

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
                  <div className="comment-score">{comment.voteScore}</div>
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
            <div>
              <Link to={`/react/${comment.parentId}/${comment.id}/edit`} onClick={() => console.log('Call Edit')}>Edit</Link>
              <Link onClick={() => console.log('Call Delete')}>Delete</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Comment;
