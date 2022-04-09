import React from "react";
import { Button, Modal } from "react-bootstrap";

const ExceptionModal = ({ message, onDialog, isLoading }) => {
  return (
    <>
      <Modal show={isLoading} onHide={onDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onDialog(true)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onDialog(true)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExceptionModal;
