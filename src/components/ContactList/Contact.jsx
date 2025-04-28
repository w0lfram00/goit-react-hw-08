import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <p>{item.name}</p>
        <p>{item.number}</p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(item.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
