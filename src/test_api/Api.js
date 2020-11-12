import React from 'react'
import PhotoPost from './endpoints/PhotoPost'
import TokenPost from './endpoints/TokenPost'
import UserPost from './endpoints/UserPost'

const Api = () => {
  return (
    <React.Fragment>
      <UserPost />
      <TokenPost />
      <PhotoPost />
    </React.Fragment>
  )
}

export default Api
