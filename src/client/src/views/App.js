import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'App.css';
import Home from 'views/Home';
import {connect} from 'react-redux';
import {fetchCategories} from 'store/category/actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {categories} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
        <select name="category">
          {categories &&
            categories.map(category => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

App.propTypes = {
  categories: PropTypes.array,
};

function mapStateToProps({categories}) {
  return {
    categories: categories,
  };
}

export default connect(mapStateToProps, {fetchCategories})(App);
