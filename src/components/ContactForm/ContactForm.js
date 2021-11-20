import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import { getContactsItems } from "../../redux/selectors";
import "./ContactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const contacts = useSelector((state) => getContactsItems(state));

  const isContactExist = () => {
    const normalizedFilter = name.toLowerCase();
    return contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedFilter
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("Fill all fields!");
      return;
    }
    const existContact = isContactExist();
    if (existContact) {
      alert(`${existContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));

    setName("");
    setNumber("");
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form-label">
        Name
        <input
          className="Form-input"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className="Form-label">
        Number
        <input
          className="Form-input"
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
