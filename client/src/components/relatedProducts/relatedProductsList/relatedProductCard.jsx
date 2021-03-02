/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ComparisonModal from './comparisonModal.jsx';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productIDInfo: '',
      parentProductIDInfo: '',
      productIDStyles: '',
      featuredURL: '',
      loaded: 0,
      openCompareModal: false,
    }
    // bind functions here
    this.handleCompareClick = this.handleCompareClick.bind(this);

    this.FlexboxItem = styled.div`
    height: 450px;
    width: 300px;
    border: 1px solid grey;
    flex-shrink: 0;
    margin-left: 5px;
    margin-right: 5px;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
    border-radius: 10px;
  `;
    this.ImageWrapper = styled.div`
    height: 200px;
    width: auto;
    margin-bottom: 20px;
  `;
    this.Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
  `;
  }

  componentDidMount() {
    axios.get(`/products/?product_id=${this.props.productID}`)
      .then(({ data })=> {
        this.setState({
          productIDInfo: data,
          compare: false,
          loaded: this.state.loaded + 1
        })
      })
    axios.get(`/products/?product_id=${this.props.productID}&flag=styles`)
      .then(({ data })=> {
        const defaultProduct = data.results.find((product)=> {
          return product["default?"] === true
        })
        if (!defaultProduct) {
          var url = data.results[0].photos[0].url;
        } else {
          url = defaultProduct.photos[0].url;
        }
        if (!url) {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: "https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
          })
        } else {
          this.setState({
            productIDStyles: data,
            loaded: this.state.loaded + 1,
            featuredURL: url
          })
        }
      })
  }

  handleCompareClick(event) {
    this.setState({
      openCompareModal: !this.state.openCompareModal
    })

  }

  render() {
    return (
      <div>
        {
          this.state.loaded < 2 &&
          <img src="https://i.gifer.com/7gQj.gif" width="150"></img>
        }
        {
          this.state.loaded === 2 &&
          <this.FlexboxItem>
            <div>
              <CompareButton
                onClick={this.handleCompareClick}
              >⭐</CompareButton>
            </div>

            <this.ImageWrapper>
              <this.Image src={this.state.featuredURL} width="100%" height="auto"></this.Image>
            </this.ImageWrapper>

            <ProductContentWrapper>{this.state.productIDInfo.category}</ProductContentWrapper>
            <ProductContentWrapper>{this.state.productIDInfo.name}</ProductContentWrapper>
            <ProductContentWrapper>${this.state.productIDInfo.default_price}</ProductContentWrapper>
          </this.FlexboxItem>
        }
        {
          this.state.openCompareModal &&
          <div>
              <ComparisonModal
            displayModal={this.state.openCompareModal}
            closeModal={this.handleCompareClick}/>
          </div>
        }
      </div>
    );
  }
}

const CompareButton = styled.button`
  right: 20%;
  top: 2%;
  cursor: pointer;
  border: none;
  background: none;
`;

const ProductContentWrapper = styled.div`
  margin: 2px 2px 2px 5px;
`;

export default RelatedProductCard;
