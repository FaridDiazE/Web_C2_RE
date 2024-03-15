import React from 'react'
import './CreatePost.css'
import PhotoIcon from '@mui/icons-material/Photo';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NavOptions from '../../ui/navOptions/NavOptions';
import CheckIcon from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Post from '../post/Post';
import ProfilePicture from '../../../assets/img/Profile.jpg'
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ButtonPubiclations from './buttonMedias/ButtonOpenM';
import InputAddMedia from './input/InputAddMedia';
import ButtonConfig from '../header/buttonConfig/ButtonConfig'

const styleContentModal = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 385,
  bgcolor: 'background.paper',
  p: 4,
};

const styleModal = {
  color: 'white',
  display:'flex',
  justifyContent:'center',
  height:672,
  top:'10%',
  right:'6%', 
  overflow: 'scroll'
}

const style = {
  position: 'absolute',
  top: '60%',
  left: '48%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  backgroundColor: "white",
  p: 2,
};


function CreatePost() {

  const [openFirstModal, setOpenFirstModal] = React.useState(false);
  const [openSecondModal, setOpenSecondModal] = React.useState(false);

  const ModalEvento = () => setOpenFirstModal(true);
  const handleCloseFirstModal = () => setOpenFirstModal(false);

  const ModalMedia = () => setOpenSecondModal(true);
  const handleCloseSecondModal = () => setOpenSecondModal(false);

  return (
    <>

      <form className='container-create-post'>
          
        <div className='sup-options-create-contariner'>

        <Avatar className='user-profile-img' alt="Remy Sharp" src={ProfilePicture} />
        
        <input className='input-create-publish' placeholder='Crear Publicacion' type="text" />

        <CheckCircleIcon sx={{fontSize:40}} className='check-img'/>

        </div>

        <div className='options-create-post-container'>
        <ButtonPubiclations  icon={PhotoIcon} text="Crear Media" handle={ModalMedia}  ></ButtonPubiclations>
        <ButtonPubiclations  icon={CalendarTodayIcon} text="Evento"  handle={ModalEvento} ></ButtonPubiclations>
        <NavOptions  icon={NewspaperIcon} text="Escribir Articulo" alignVertical></NavOptions>
        </div>

        <div>
          <Modal
          open={openFirstModal}
          onClose={handleCloseFirstModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={styleModal}
        >
            <Box sx={styleContentModal}>
                <div className='modal-content-event' >
                  <h1>Crear Evento</h1>
                    <div className='container-inputs'>
                      <InputAddMedia type={'file'} customClassInput={'input-addMEdia'} />
                      <InputAddMedia withLabel={true} label={'acerca del evento'} 
                      placeholder={'[Campo para compartir una breve descripción sobre el evento]'} type={'text'} customClassInput={'input-AddE'} />
                      <div className='inputs-dates'>
                        <InputAddMedia withLabel={true} label={'Fecha de inicio'} type={'date'} placeholder={'24/03/2024'} className={'input-AddFI'} />
                        <InputAddMedia withLabel={true} label={'Hora de inicio'} type={'time'} placeholder={'12:00 hrs'} />
                        <InputAddMedia withLabel={true} label={'Fecha de fin'} type={'date'} placeholder={'24/03/2024'} />
                        <InputAddMedia withLabel={true} label={'Hora de fin'} type={'time'} placeholder={'16:00 hrs'} />
                      </div>
                      <div className='input-enlace-container'>
                        <InputAddMedia withLabel={true} label={'Enlace externo al evento'} type={'text'} placeholder={'meet.com/234687515'} customClassInput={'input-enlace'} />
                        <InputAddMedia withLabel={true} label={'Ponentes'} type={'text'} placeholder={'Joan Rosenbaum'} />
                      </div>
                  </div>
                  
                  <div className='container-button-eve'>
                    <ButtonConfig text="Publicar Evento" customClassB={'button-event'}/>
                  </div>
              </div>
            </Box>
          </Modal>
        </div>

        <div>
          <Modal open={openSecondModal} onClose={handleCloseSecondModal} aria-labelledby="modal-modal-title"  aria-describedby="modal-modal-description"
          sx={style}
          >
            <Box>
              <div className='modal-conten-media'>
                <h4>Agregar contenido multimedia</h4>
                <div className='container-av-med'>
                  <Avatar/>
                  <InputAddMedia type={'file'} placeholder={'Crear Publicacion'} customClassInput={'input-media-add'}/>
                </div>
                <div className='container-button-med'>
                    <ButtonConfig text="Todo Publico " customClassB={'button-media'}/>
                    <ButtonConfig text="Publicar contenido multimedia" customClassB={'button-media2'}/>
                </div>
              </div>
            </Box>
          </Modal>
        </div>





        <Post  />
        <Post  />
        <Post  />

      </form>

    </>
  )
}

export default CreatePost