import React from 'react';

const imgStyle = {
  height: '60px',
  width: '60px',
  // margin: 'auto',
  // paddingLeft: '10px',
  // paddingRight: '10px',
  // paddingTop: '10px',
  borderRadius: '40px',
  objectFit: 'cover',
  cursor: 'pointer'
}

const modalStyle = {
  display: 'flex',
  backdropFilter: 'blur(8px) contrast(70%)',
  backgroundColor: 'rgb(0,0,0)', /* Fallback color */
  backgroundColor: 'rgba(0,0,0,0.4)',
  zIndex: '150',
  width: '100%', /* Full width */
  height: '100%', /* Full height */
  position: 'fixed', /* Fix position on the top-left corner*/
  top: '0',
  left: '0',
  justifyContent: 'center',
  overflow: 'hidden', /* Enable scroll if needed */
  margin: 'auto'
};

const expandedImg = {
  borderRadius: '10px',
  maxHeight: '600px',
  maxWidth: '800px',
  margin: 'auto',
  overflow: 'hidden',
}

class PhotoMapEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false
    }
  }

  render(){
     const url = this.props.photo.url
    return (
      <div>
        {
          this.state.expand === true &&
          <div style={modalStyle} onClick={() => {this.setState({expand: false})}}>
          <img src={url} style={expandedImg}></img>
          </div>
        }
        <img src={url} style={imgStyle} onClick={() => {this.setState({expand: true})}}></img>
      </div>
    )
  }
}

export default PhotoMapEntry;