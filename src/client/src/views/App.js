import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, Route, withRouter, Switch} from 'react-router-dom';
import 'css/App.css';

import {connect} from 'react-redux';
import {sortPost} from 'store/post/actions';
import {Icon} from 'react-fa';
import {fetchCategories} from 'store/category/actions';
import logo from 'assets/icon.svg';

import Home from 'views/Home';

import NewComment from 'views/comment/NewComment';
import EditComment from 'views/comment/EditComment';

import NewPost from 'views/post/NewPost';
import EditPost from 'views/post/EditPost';
import PostDetail from 'views/post/PostDetail';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {categories, sortPost} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img
              src={logo}
              width="100"
              height="100"
              className="App-logo"
              alt="logo"
            />
            <h1 className="App-title"> Readable </h1>
          </Link>
        </header>
        <div className="filters">
          <div>
            Category:
            <ul>
              <li>
                <Link to={`/`}>All</Link>
              </li>
              {categories &&
                categories.map(category => (
                  <li key={category.name}>
                    <Link key={category.name} to={`/${category.path}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            Sort By:
            <select onChange={e => sortPost(e.target.value)}>
              <option value="none" default disabled>
                None
              </option>
              <option value="timestamp">Time</option>
              <option value="voteScore">Vote Score</option>
            </select>
          </div>

          <div className="nav-header">
            <Link className="new-post" to="/new">
              <Icon size="3x" name="plus" />
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/:category" component={Home} />
          <Route exact path="/:category/:postId" component={PostDetail} />
          <Route path="/:category/:postId/edit" component={EditPost} />
          <Route path="/:category/:postId/comment" component={NewComment} />
          <Route
            path="/:category/:postId/:commentId/edit"
            component={EditComment}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
};

function mapStateToProps({categories}) {
  return {
    categories: categories,
  };
}

export default withRouter(
  connect(mapStateToProps, {
    sortPost,
    fetchCategories,
  })(App)
);
