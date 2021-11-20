import { useSelector, useDispatch } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations";
import { getContactList } from "../../redux/selectors";
import s from "./ContactsList.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <table className={s.ListTable}>
      <tbody>
        {contacts.map(({ name, number, id }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
