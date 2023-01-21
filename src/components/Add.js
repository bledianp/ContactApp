import { Form, Button } from "react-bootstrap";
import { ContactContext } from "../contexts/ContactContext";
import { useContext, useState } from "react";

const Add = () => {
  const { addContact } = useContext(ContactContext);

  const [numbers, setNumber] = useState([""]);
  const [emails, setEmails] = useState([""]);

  const handleAdd = (e) => {
    if (e.currentTarget.previousElementSibling.name === "number") {
      setNumber([...numbers, ""]);
    } else if (e.currentTarget.previousElementSibling.name === "email") {
      setEmails([...emails, ""]);
    }
  };

  const [newContact, setNewContact] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    email: "",
    number: "",
  });

  const onInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const { name, lastName, address, city, country, email, number } = newContact;

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, lastName, address, city, country, email, number);
  };

  const onInputChangeNumber = (e, index) => {
    const list = [...numbers];

    list[index] = e.target.value;
    setNumber(list);
    setNewContact({ ...newContact, number: list });
  };

  const onInputChangeEmail = (e, index) => {
    const list = [...emails];

    list[index] = e.target.value;
    setEmails(list);
    setNewContact({ ...newContact, email: list });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the Name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>City:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city"
          name="city"
          value={city}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Country:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter country"
          name="country"
          value={country}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group className="d-flex flex-column right">
        <Form.Label>Email:</Form.Label>

        {emails.map((email, index) => (
          <Form.Control
            className="mb-2"
            key={index}
            type="email"
            placeholder="Enter the Email"
            name="email"
            value={email.email}
            onChange={(e) => onInputChangeEmail(e, index)}
            required
          />
        ))}

        <Button variant="primary" size="sm" onClick={(e) => handleAdd(e)}>
          Add
        </Button>
      </Form.Group>

      <Form.Group className="d-flex flex-column right">
        <Form.Label>Number:</Form.Label>

        {numbers.map((n, index) => (
          <Form.Control
            className="mb-2"
            key={index}
            type="text"
            placeholder="Enter the Number"
            name="number"
            value={n.number}
            onChange={(e) => onInputChangeNumber(e, index)}
          />
        ))}

        <Button variant="primary" size="sm" onClick={(e) => handleAdd(e)}>
          Add
        </Button>
      </Form.Group>

      <Button variant="primary" type="submit" size="sm">
        Save
      </Button>
    </Form>
  );
};

export default Add;
