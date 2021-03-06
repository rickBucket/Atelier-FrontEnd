/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  /* border: 3px red solid; */
`;

const SearchDiv = styled.div`
  width: 60%;
  position: relative;
  display: flex;
`;
const SearchBar = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    background-color: none;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    outline: none;
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

  &:hover {
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
        <SearchBtn >🔍</SearchBtn>
        </SearchDiv>
      </form>
      </Container>
    )
  }
}

export default Search;

//get a magnifying glass icon for search bar
