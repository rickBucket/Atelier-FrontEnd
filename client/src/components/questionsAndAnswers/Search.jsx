import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',

    }
    this.handleSubmit = this.handleSubmit.bind.this;
  }

  handleSubmit(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={event => {event.preventDefault(); }}>
        <div className='searchBar'>
        <input placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...        ' type='text' value={this.state.text} onChange={this.handleSubmit} ></input>
        <button className='search_button'> Search </button>
        </div>
      </form>
    )
  }
}

export default Search;
