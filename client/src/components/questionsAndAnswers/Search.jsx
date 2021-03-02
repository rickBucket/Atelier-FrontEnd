import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  /* border: 3px red solid; */
`;

const SearchDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;
const SearchBar = styled.input`
  width: 100%;
  border: 1px solid grey;
  border-right: none;
  padding: 5px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;
  font-size: 15px;
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  background:grey;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;

  &:hover ${SearchBtn} {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }
`;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <Container>
      <form onSubmit={event => {event.preventDefault(); }}>
        <SearchDiv className='searchBar'>
        <SearchBar placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...        ' type='text' value={this.state.text}  onChange={this.handleSubmit} ></SearchBar>
        <SearchBtn className='search_button'> Go! </SearchBtn>
        </SearchDiv>
      </form>
      </Container>
    )
  }
}

export default Search;

//get a magnifying glass icon for search bar
