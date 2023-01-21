import { useContext, useState, useEffect } from "react";
import { ContactContext } from "../contexts/ContactContext";
import Edit from "./Edit";
import { Modal, Button } from "react-bootstrap";

function Contact({ contact }) {
  const { deleteContact } = useContext(ContactContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [contact]);

  return (
    <>
      <td>{contact.name}</td>
      <td>{contact.lastName}</td>
      <td>{contact.address}</td>
      <td>{contact.city}</td>
      <td>{contact.country}</td>
      <td>{contact.email[0]}</td>
      <td>{contact.number[0]}</td>
      <td>
        <Button onClick={handleShow} className="btn btn-success" size="sm">
          Edit
        </Button>
      </td>
      <td>
        <Button
          onClick={() => deleteContact(contact.id)}
          className="btn btn-danger"
          size="sm"
        >
          Delete
        </Button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title className="p-3">Register new contact</Modal.Title>

        <Modal.Body>
          <Edit contact={contact} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Contact;
