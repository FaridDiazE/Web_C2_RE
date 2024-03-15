import React from 'react'
import './Profile.css'
import ProfileData from '../../components/pages/Profile/ProfileData'
import Articles from '../../components/pages/ArticlesSidebar/Articles'

function Profile() {
  return (
    <>
    
    <div className='body-profile-container'>
    <ProfileData/>
    <Articles/>
    
    </div>
    
    
    </>
  )
}

export default Profile