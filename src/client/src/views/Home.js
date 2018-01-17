import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import {connect} from 'react-redux';
import * as actions from 'store/post/actions';

class Home extends Component {
  static propTypes = {
    posts: PropTypes.array,
  };

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const {posts} = this.props;
    return <div>{posts.map(post => <Post key={post.id} post={post} />)}</div>;
  }
}

Home.propTypes = {
  posts: PropTypes.array,
};

function mapStateToProps({posts}) {
  return {
    posts: posts,
  };
}

export default connect(mapStateToProps, actions)(Home);
