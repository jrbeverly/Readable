import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from './post/Post';

class Home extends Component {
  render() {
    const { posts } = this.props;
    return <div>{posts.map(post => <Post key={post.id} post={post} />)}</div>;
  }
}

Home.propTypes = {
  posts: PropTypes.array,
};

export default Home;
