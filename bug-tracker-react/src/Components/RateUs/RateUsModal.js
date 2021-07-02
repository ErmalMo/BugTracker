import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import RateUsForm from './RateUsForm'
export default function RateUsModal() {
    
      const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Button color="primary" onClick={toggle}><i class="far fa-edit"></i> Edit Rate</Button>
            <Modal isOpen={modal} toggle={toggle}  style={{ width:"500px" }}>
            <ModalHeader toggle={toggle}>Form REGLOG</ModalHeader>
            <ModalBody>
                <RateUsForm classnameOfForm={false}/>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}
