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
    return <div>{posts.map(post => <Post key={post.id} post={post} history={this.props.history} />)}</div>;
  }
}

Home.propTypes = {
  posts: PropTypes.array,
};

function mapStateToProps({posts}, props) {
  const category = props.match.params.category;
  return {
    posts: category ? posts.filter(post => post.category === category) : posts,
  };
}

export default connect(mapStateToProps, actions)(Home);
