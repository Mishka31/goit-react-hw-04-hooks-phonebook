import s from "./ContactList.module.css";
import PropTypes from "prop-types";

function ContactList({ contacts, onDelete }) {
  return (
    <section className={s.section}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={s.li}>
              <span className={s.name}>{contact.name}:</span>{" "}
              <a className={s.number} href="tel:{contact.number}">
                {contact.number}
              </a>
              <button className={s.button} id={contact.id} onClick={onDelete}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};
