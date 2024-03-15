import React from 'react'
import ArticlesSideBar from '../../ui/cardArtocles/ArticlesSideBar'
import Monkey from '../../../assets/img/Chimp.jpg'
import './Articles.css'
function Articles() {
  return (
    <div className='container-articles'>
        <div className='text-article-titles'>

        <h3 className='tittel-container-articles'>Articulos Recientes</h3>
        <p className='articles-subtheme'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        
        </div>
        <ArticlesSideBar img={Monkey} tittle="Cesar el mono" ></ArticlesSideBar>
        <ArticlesSideBar img={Monkey} tittle="Cesar el mono" ></ArticlesSideBar>
        <ArticlesSideBar img={Monkey} tittle="Cesar el mono" ></ArticlesSideBar>

    </div>
  )
}

export default Articles