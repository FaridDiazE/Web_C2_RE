import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import portada from '../../../assets/img/Portada.jpg'
import profile from '../../../assets/img/Profile.jpg'
import './ProfileCard.css'
function ProfileCard() {
  return (
    <>
    
    <Card sx={{
            height :350 , 
            width : 400 ,
            textAlign : 'center',
          
         }}>
      <CardActionArea sx={{
            height : '100%' , 
            width : '100%' ,
            textAlign : 'center',
         }}>
        <CardMedia
          component="img"
          height="38%"
          image={portada}
          alt="profile picture"
        />
        
        <div className='photo-profile'>
        <CardMedia
        
            component='img'
            height="100%"
            width="100%"
            image={profile}
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Joanna Rosenbaum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quos reprehenderit hic delectus explicabo totam possimus 
          </Typography>
            <div className='container-data'>
            <Button disabled  variant="outlined">24 <br/> Post</Button>
            
            <Button disabled variant="outlined">176<br/> Articles</Button>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
  )
}

export default ProfileCard