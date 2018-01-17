import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-fa';

/**
 * @description Represents a vote button.
 */
const VoteButton = props => {
  const {onVoteUp, onVoteDown} = props;

  return (
    <div className="votesBox">
      <div className="vote-block">
        <div className="vote" onClick={onVoteUp}>
          <Icon name="thumbs-up" />
        </div>
        {props.children}
        <div className="vote" onClick={onVoteDown}>
          <Icon name="thumbs-down" />
        </div>
      </div>
    </div>
  );
};

VoteButton.propTypes = {
  onVoteUp: PropTypes.func,
  onVoteDown: PropTypes.func,
};

export default VoteButton;
