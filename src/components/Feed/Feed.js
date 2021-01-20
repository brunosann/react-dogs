import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null)

  return (
    <React.Fragment>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </React.Fragment>
  )
}

export default Feed
