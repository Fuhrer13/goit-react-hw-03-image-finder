import React, { Component } from 'react';
import classes from '../../App.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({
      query,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onChangeQuery(this.state.query);
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const query = this.state.query;
    return (
      <>
        <header className={classes.Searchbar}>
          <form className={classes.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={classes['SearchForm-button']}>
              <span className={classes['SearchForm-button-label']}>Search</span>
            </button>

            <input
              className={classes['SearchForm-input']}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={query}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
};

export default Searchbar;
