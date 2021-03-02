/* eslint-disable */
import React from 'react';
import Answers from './Answers.jsx';
import styled from 'styled-components';
import AnswerModal from './AnswerModal.jsx';

const ContainerA = styled.div`
  padding: 10px;
  border: 3px green solid;
`;

const EachQ = styled.div`
  display: flex;
`;

const MoveRight = styled.div`
  display: flex;
  float: right;
`;

const ContainerB = styled.div`
  padding: 10px;
  border: 3px gold solid;
`;

const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LoadButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
`;


// CLASS STARTS HERE ------------------------//

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      loadedState: false,
      loadMore: false,
      modal: false,
      itemsToShow: 2,
      expanded: false,
    };
    this.selectModal = this.selectModal.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  componentDidMount() {
    const object = this.props.item.answers
    if (object.length <= 1) {
      this.setState({
        answers: Object.values(object),
        loadedState: true,
        loadMore: false
      })
    } else {
      this.setState({
        answers: Object.values(object),
        loadedState: true,
        loadMore: true
      })
    }
  }

  selectModal() {
    this.setState({
      modal: !this.state.modal //toggle
    })
  }

  showMore() {
    this.state.itemsToShow === 2 ? (
      this.setState({
        itemsToShow: this.state.answers.length,
        expanded: true,
      })
    ) : (
      this.setState({
        itemsToShow: 2,
        expanded: false,
      })
    )
  }

  render() {
    if (!this.state.loadedState) {
      return(
        null
      )
    } else {
    return (
    <ContainerA>

           <EachQ>
           <h3>Q: {this.props.item.question_body} </h3>
           </EachQ>

              <MoveRight>
              <p> Helpful? </p>
              <Button> Yes </Button>
              <p>({this.props.item.question_helpfulness})</p>
              <span className="divider"> | </span>
              <Button onClick={ this.selectModal }> Add Answer </Button>
              </MoveRight>


        <div>
        {this.state.answers.slice(0,this.state.itemsToShow).map((answer, i) => {
          return (
            <ContainerB>
            <Answers item={answer} key={this.state.answers.id} seller={this.props.item.asker_name}/>
            </ContainerB>
          )
        })}
        {this.state.answers.length > 1 && !(this.state.expanded) ? (
          <LoadButton onClick={(event) => { this.showMore(); } }> LOAD MORE ANSWERS </LoadButton>
          ) : (
          <LoadButton onClick={(event) => { this.showMore(); }}> Collapse List </LoadButton>
          )}
        </div>
          <AnswerModal displayModal={this.state.modal} closeModal={this.selectModal}/>
    </ContainerA>
    );
  }
}
}

export default Question;

// Q: -
// A: -
// helpful question button -value helpful, yes is button, {} answers.count value
// add answer button
