import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  hendkeSubmit = (e) => {
    e.preventDefault();
    const nameFromArrey = this.props.listArrey.map((c) => c.name.toLowerCase());
    if (nameFromArrey.includes(this.state.name.toLowerCase())) {
      this.reset();
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div className={s.container}>
        <form className={s.imputAndButton} onSubmit={this.hendkeSubmit}>
          <label htmlFor={this.nameId}>
            <p className={s.name}>Name</p>
            <input
              type="text"
              className={s.imput}
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              id={this.nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor={this.numberId}>
            <p className={s.name}>Number</p>
            <input
              type="tel"
              className={s.imput}
              onChange={this.handleChange}
              value={this.state.number}
              name="number"
              id={this.numberId}
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
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};
