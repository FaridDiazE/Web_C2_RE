import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ArticlesCard.css'

function ArticlesSideBar({img,tittle} ) {
  return (
    <Card sx={{ maxWidth: 345 , maxHeight:350, marginLeft : 7,marginTop:5 }}>
      <CardMedia
        component="img"
        alt="BackGround"
        height="50%"
        image={img}
      />
      <CardContent className='card-content-articles'>
        <Typography gutterBottom variant="h5" component="div">
          {tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Saber mas</Button>
       
      </CardActions>
    </Card>
  )
}

export default ArticlesSideBar