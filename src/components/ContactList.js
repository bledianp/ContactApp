import Contact from "./Contact";
import Add from "./Add";
import { ContactContext } from "../contexts/ContactContext";
import { Modal, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

function ContactList() {
  const { contacts } = useContext(ContactContext);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [contacts]);

  return (
    <>
      <div className="main-title">
        <h2>Contacts</h2>

        <Button onClick={handleShow} className="btn " data-toggle="modal">
          Add Contact
        </Button>
      </div>
      <div className="table-responsive-xl">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <Contact contact={contact} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title className="p-3">Register new contact</Modal.Title>
        <Modal.Body>
          <Add />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactList;
