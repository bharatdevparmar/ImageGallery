import React from 'react';
import {Modal, ModalBody, ModalFooter, Button} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";

class ConfirmModal extends React.Component {

    replaceImages = () => {
        const { handleReplace, onCloseModal } = this.props;
        handleReplace();
        onCloseModal();
    };

    render() {
        const { show, onCloseModal } = this.props;
        return (
            <Modal
                size={'sm'}
                show={show}
                onHide={onCloseModal}
            >
                <ModalHeader>
                    <strong>Image Replacement</strong>
                </ModalHeader>
                <ModalBody>Are you sure you want to replace images?</ModalBody>
                <ModalFooter>
                    <Button onClick={onCloseModal} variant={'danger'}>Cancel</Button>
                    <Button onClick={this.replaceImages} variant={'primary'}>Replace</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ConfirmModal;