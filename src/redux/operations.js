import axios from "axios";
import * as actions from "./actions";

axios.defaults.baseURL = "https://6198e7e0164fa60017c23214.mockapi.io/api/goit-react-hw-07-phonebook/";

export const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactsError(error.message)));
};

export const addContact = (data) => (dispatch) => {
  dispatch(actions.addContactsRequest());
  axios
    .post("/contacts", data)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch((error) => dispatch(actions.addContactsError(error.message)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch((error) => dispatch(actions.deleteContactError(error.message)));
};
