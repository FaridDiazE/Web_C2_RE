import React from "react";
import "./ProfileData.css";
import Backgr from "../../../assets/img/Portada.jpg";
import ProfileIMG from "../../../assets/img/Profile.jpg";
import Iconbtn from "../../ui/iconButton/Iconbtn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Profile from "./Profiles/Profile";
import Post from "../post/Post";


function ProfileData() {
  return (
    <>
      <div className="container-data-profile">
        <div className="img-background-profile-gr">
          <img
            src={Backgr}
            alt="Profile Background"
            className="background-image"
          />
        </div>

        <img src={ProfileIMG} className="photo-profile-in" />

        <div className="data-content-profile">
          <div>
            <p className="name-profile-data">Josep Towers </p>
            <p className="job-profile-data">Ing. Sitemas de comunicaion</p>
            <p className="city-data-profile">Chiapas, Mexico</p>
          </div>

          <div className="container-redes">
            <Iconbtn icono={InstagramIcon} text="@JhonConstantin" />
            <Iconbtn icono={FacebookIcon} text="@JhonConstantin" />
            <Iconbtn icono={XIcon} text="@JhonConstantin" />
          </div>

          <span>
            <p className="span-tittle-header">Intereses</p>
          </span>

          <div className="content-interst-data">
            <div className="interst-container-middle">
              <p className="hobbies-data-btn">Materias</p>
              <p className="hobbies-data-btn">Deportes</p>
              <p className="hobbies-data-btn">Hobbies</p>
              <p className="hobbies-data-btn">Comida</p>
            </div>
          </div>
          <span>
            <p className="hobbies-data-btn-2">Peliculas/Series</p>
          </span>
        </div>
        <div className="main-container-abt">
          <div className="container-aboutme">
            <div className="aboutme-text-cont">
              <p className="ttile-aboutme">Acerca de mi</p>
              <p className="description-aboutme">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, voluptate! Totam neque veritatis suscipit eum ad
                asperiores eius laborum, odit quam beatae quasi rem dolor.
                Accusantium dicta quasi explicabo. Minima. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Inventore eligendi, hic,
                consectetur tempore recusandae earum reiciendis, similique iusto
                perferendis alias aliquam sed explicabo quod at commodi in odio
                sequi voluptatum.
              </p>
            </div>
          </div>

          <div className="friends-container">
            <div className="container-sup-friends">
              <p className="      ">Amigos</p>
            </div>

            <span className="friends-amount">
              <p>123 amigos</p>
              <p>Buscar amigos</p>
            </span>

            <div className="profile-info">
              <Profile name={"Jose torres"} carrer={'Ing. Sistemas computacionales'} />
              <Profile name={"Hasbulla"} carrer={'Tiktoker'} />
            </div>
          </div>
        </div>

        <Post />

      </div>
    </>
  );
}

export default ProfileData;
