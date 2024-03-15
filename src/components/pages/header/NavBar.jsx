import React from 'react'
import './NavBar.css'
import NavOptions from '../../ui/navOptions/NavOptions'
import Logo from '../../../assets/img/Logo.png'
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ButtonConfig from './buttonConfig/ButtonConfig'


const styleContentModal = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 150,
  bgcolor: 'background.paper',
  p: 4,
};

const styleModal = {
  color: 'white',
  display:'flex',
  justifyContent:'flex-end',
  height:'120px',
  top:'10%',
  right:'6%',
  
}


function NavBar() {
  const navi = useNavigate();
  
  const handleClick = () =>{
      navi('/')
  }

  const handleClickp = () =>{
    navi('/profile')
}


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  return (
    <>
    
      <nav className='nav-container'>
        
        <div className='logo-container'>
          <img src={Logo} alt="Logo" width={150} height={150} />
        </div>

        <div className='container-search-input'>
          <input icon={<SearchIcon/>} placeholder='Buscar' className='search-input' type="text" />
        </div>

        <div className='container-nav-options'>
          <NavOptions handle={handleClick} text="Inicio"></NavOptions>
          <NavOptions  text="Grupos"></NavOptions>
          <NavOptions text="Articulos"></NavOptions>
          <NavOptions text="Comunicados"></NavOptions>
        </div>

        <div className='container-user-options'>
          <NavOptions handle={handleClickp} text="Mi Perfil"></NavOptions>
          <NavOptions icon={SettingsIcon} handle={handleOpen} ></NavOptions>

          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={styleModal}
        >
          <Box sx={styleContentModal}>
            <div className='button-modal-conf'>
              <ButtonConfig text="Configuracion" customClassB={'buton-config-m'}/>
              <ButtonConfig text="Cerrar sesion" customClassB={'buton-config-m'}/>
            </div>
          </Box>
        </Modal>
        </div>

 
      </nav>

    </>
  )
}

export default NavBar