import React from 'react';

const optionsBar = {
  width: '100px',
  boxShadow: '2px 2px 4px grey',
  marginLeft: '10px',
  border: '1px solid grey',
  textAlign: 'center',
  cursor: 'pointer',
};

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.totalReviews = this.totalReviews.bind(this);
  }

  totalReviews(obj){
    var total = Number(obj.false) + Number(obj.true);
    return total
  }

  render() {
    const listSortChange = this.props.listSortChange;
    return(
      <div style={{
        fontWeight: 'bold',
      }}>
        {`${this.totalReviews(this.props.metaData.recommended)} reviews, sorted by most`}
        <select style={optionsBar} onChange={listSortChange}>
          <option value="1">Relevant</option>
          <option value="2">Helpful</option>
          <option value="3">Recent</option>
        </select>
      </div>
    )
  }
}

export default SortOptions