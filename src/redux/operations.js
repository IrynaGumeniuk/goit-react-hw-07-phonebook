import axios from "axios";
import * as actions from "./actions";

axios.defaults.baseURL = "https://6198e7e0164fa60017c23214.mockapi.io/api/goit-react-hw-07-phonebook/";



export const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contacts = { name, number, completed: false };

  dispatch(actions.addContactsRequest());

  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.addContactsError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};