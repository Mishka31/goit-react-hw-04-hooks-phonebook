import { useState } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

const ContactForm = ({ onSubmit, listArrey }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const hendkeSubmit = (e) => {
    e.preventDefault();
    const nameFromArrey = listArrey.map((c) => c.name.toLowerCase());
    if (nameFromArrey.includes(name.toLowerCase())) {
      reset();
      alert(`${name} is already in contacts`);
      return;
    }
    onSubmit({ name, number });
    reset();
  };

  const handleChange = (event) => {
    const { name: inputName, value } = event.target;

    if (inputName === "name") {
      setName(value);
    } else if (inputName === "number") {
      setNumber(value);
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <div className={s.container}>
      <form className={s.imputAndButton} onSubmit={hendkeSubmit} autoComplete="off">
        <label>
          <p className={s.name}>Name</p>
          <input
            type="text"
            className={s.imput}
            onChange={handleChange}
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p className={s.name}>Number</p>
          <input
            type="tel"
            className={s.imput}
            onChange={handleChange}
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};
