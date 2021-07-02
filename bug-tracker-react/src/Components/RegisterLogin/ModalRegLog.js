import React, {useState} from 'react'
import {InputGroup, InputGroupAddon, Input,Row,Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
export default function ModalRegLog(props) {
    const {
        buttonLabel,
        className
      } = props;
      const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    const [open, setOpen] = React.useState(false)

    return (
    
    <div className="container">
        <Button color="danger" onClick={toggle}>Edit User</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>EDIT</ModalHeader>
                <ModalBody>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@email</InputGroupAddon>
                    <Input defaultValue={"empid"} />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@username</InputGroupAddon>
                    <Input />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@password</InputGroupAddon>
                    <Input />
                </InputGroup>
                    <br />
                </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    </div>
    )
}

