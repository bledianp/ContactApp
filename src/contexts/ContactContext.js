import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const ContactContext = createContext();

const ContactContextProvider = (props) => {
  const [contacts, setContacts] = useState(
    localStorage.contacts
      ? JSON.parse(localStorage.contacts)
      : [
          {
            id: nanoid(),
            name: "Bledian",
            lastName: "Potera",
            address: "Xhemajl Mustafa St.",
            city: "Podujeve",
            country: "Kosovo",
            email: ["bledianpotera1@gmail.com"],
            number: ['049217522'],
          },
          {
            id: nanoid(),
            name: "Ramadan",
            lastName: "Hyseni",
            address: "Skenderbeu St.",
            city: "Prishtine",
            country: "Kosovo",
            email: ["ramadan@gmail.com"],
            number: ['044145235', '043270877'],
          },
          {
            id: nanoid(),
            name: "Arjeta",
            lastName: "Rama",
            address: "Tirana St.",
            city: "Prishtine",
            country: "Kosovo",
            email: ["arjeta@gmail.com", 'arjeta@outlook.com'],
            number: ['045666777'],
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (
    name,
    lastName,
    address,
    city,
    country,
    email,
    number
  ) => {
    setContacts([
      ...contacts,
      { id: nanoid(), name, lastName, address, city, country, email, number },
    ]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const updateContact = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, deleteContact, updateContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
