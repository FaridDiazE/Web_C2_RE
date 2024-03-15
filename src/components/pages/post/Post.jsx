import React from 'react'
import './Post.css'
import Iconbtn from '../../ui/iconButton/Iconbtn';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FeedPOst from '../../../assets/img/Chimp.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import ProfilePicture from '../../../assets/img/Profile.jpg'



export default function Post({tittle,img}) {
  return (
    <>
        <div className='main-post'>

            <div className='container-profile-post'>
                
                <div className='container-prfile-name'>

                    <span className='avatar-container-post'>
                        <Avatar alt="Remy Sharp" src={ProfilePicture} />
                    </span>

                    <div className='container-profile-info'>
                        <h5 className='profile-name-post'>Jose torres</h5>

                        <span className='time-post-created'><p>4 horas</p></span>
                    </div>

                    <div>
                    <MoreHorizIcon sx={{marginLeft:48 , marginTop:3}} />
                </div>

                </div>

                
            </div>

            <div className='container-conten-post'>
                <p>lLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro</p>
                <img src={FeedPOst} alt="Post" className='img-post' />
            </div>

            <div className='container-options-posts'>
                <Iconbtn icono={FavoriteIcon} text="10 me gusta"></Iconbtn>
                <Iconbtn icono={ChatBubbleIcon} text="2 Comentarios"></Iconbtn>
                <Iconbtn icono={ShareIcon} text="0 Compartir"></Iconbtn>
            </div>  

            <div className='container-post-interaction'>

                <Iconbtn  icono={FavoriteIcon} text="Me gusta" color="disabled" ></Iconbtn>
                <Iconbtn icono={ChatBubbleIcon} text="0 Comentarios" color="disabled"></Iconbtn>
                <Iconbtn icono={ShareIcon} text="0 Compartir" color="disabled"></Iconbtn>
                
            </div>
        </div>
    </>
  )
}
