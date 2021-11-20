import { useSelector } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactsList/ContactsList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import { getContactsError, getContactsLoading } from "./redux/selectors";

function App() {
  const error = useSelector((state) => getContactsError(state));
  const isLoading = useSelector((state) => getContactsLoading(state));
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p className="App-find">Find contacts by name</p>
      <Filter />
      {isLoading && <p>{" Loading... "}</p>}
      {error && <p>{" Sorry, something goes wrong: " + error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
