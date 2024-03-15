import React from 'react'
import './Feed.css'
import ProfileCard from '../../components/pages/sideBarProfile/ProfileCard'
import CreatePost from '../../components/pages/createPost/CreatePost'
import Articles from '../../components/pages/ArticlesSidebar/Articles'
import Post from '../../components/pages/post/Post'
function Feed() {
  return (
    <div className='container-body'>

      <div className='sidebabr-profile-container'>
        <ProfileCard/>
        <CreatePost/>
        <Articles/>
      </div>

    </div>
  )
}

export default Feed