import { Form, Button } from "react-bootstrap";
import { ContactContext } from "../contexts/ContactContext";
import { useContext, useState } from "react";

const Edit = ({ contact }) => {
  const id = contact.id;

  const [name, setName] = useState(contact.name);
  const [lastName, setLastName] = useState(contact.lastName);
  const [address, setAddress] = useState(contact.address);
  const [city, setCity] = useState(contact.city);
  const [country, setCountry] = useState(contact.country);
  const [email, setEmail] = useState(contact.email);
  const [number, setNumber] = useState(contact.number);

  const { updateContact } = useContext(ContactContext);

  const updatedContact = {
    id,
    name,
    lastName,
    address,
    city,
    country,
    email,
    number,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, updatedContact);
  };

  const onInputChangeNumber = (e, index) => {
    const list = [...number];

    list[index] = e.target.value;
    console.log("lista", list);
    setNumber(list);
    console.log("Numrat", number);
  };

  const onInputChangeEmail = (e, index) => {
    const list = [...email];

    list[index] = e.target.value;
    setEmail(list);
    console.log(email);
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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
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
          onChange={(e) => setCity(e.target.value)}
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
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        {email.map((email, index) => (
          <Form.Control
            className="mb-3"
            key={index}
            type="email"
            placeholder="Enter the Email"
            name="email"
            value={email}
            onChange={(e) => onInputChangeEmail(e, index)}
          />
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number:</Form.Label>
        {number.map((number, index) => (
          <Form.Control
            className="mb-3"
            key={index}
            type="text"
            placeholder="Enter the Number"
            name="number"
            value={number}
            onChange={(e) => onInputChangeNumber(e, index)}
          />
        ))}
      </Form.Group>
      <Button variant="primary" type="submit" size="sm">
        Save
      </Button>
    </Form>
  );
};

export default Edit;
