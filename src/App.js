import useLocalStorage from "./hooks/useLocalStorage.js";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import s from "./App.module.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", "");
  const [filter, setfilter] = useLocalStorage("", "");

  const lowerFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(lowerFilter));

  const onFind = (e) => setfilter(e.target.value);
  const formSubmitHandler = (data) => setContacts([...contacts, { id: uuidv4(), ...data }]);
  const onDelete = (id) => setContacts((contacts) => contacts.filter((contact) => contact.id !== id.target.id));

  return (
    <div>
      <h1 className={s.titleH1}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} listArrey={contacts} />
      <h2 className={s.titleH2}>Contacts</h2>
      <Filter value={filter} onSearch={onFind} />
      <ContactList contacts={filteredContacts} onDelete={onDelete} />
    </div>
  );
};

export default App;
