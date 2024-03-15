import React from 'react'
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
  

export default function ModalEvento() {

    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
        
        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={styleModal}
        >
          <Box sx={styleContentModal}>
              <div className='modal-conten-media' >
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
    </>
  )
}
