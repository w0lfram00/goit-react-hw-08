import React from "react";
import Contact from "./Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
