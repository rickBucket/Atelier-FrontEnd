import React from 'react';
import PhotoMapEntry from './photoMapEntry.jsx';

const imgContainer = {
  display: 'flex',
  alignContent: 'flex-start',
  float: 'left'
}

const PhotosMap = ({ photos }) => {

  return (
    <div>
      <div style={imgContainer}>
        {photos.map(photo => (
          <PhotoMapEntry photo={photo} key={photo.id}/>
        ))}
        </div>
    </div>
  )
}

export default PhotosMap;