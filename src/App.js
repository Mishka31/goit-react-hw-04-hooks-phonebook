import { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import s from "./App.module.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [contacts, setContacts] = useState([{ id: "1", name: "Misha Krasnonos", number: "050-762-05-64" }]);
  const [filter, setfilter] = useState("");

  const lowerFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(lowerFilter));

  const onFind = (e) => setfilter(e.target.value);
  const formSubmitHandler = (data) => setContacts([...contacts, { id: uuidv4(), ...data }]);
  const onDelete = (id) => setContacts((contacts) => contacts.filter((contact) => contact.id !== id.target.id));

  useEffect(() => {
    const contactsStorage = JSON.parse(localStorage.getItem("contacts"));
    if (contactsStorage) {
      setContacts(contactsStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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
