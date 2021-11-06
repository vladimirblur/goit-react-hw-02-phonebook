import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li className={s.item} key={id}>
          <span className={s.contactInfo}>
            {name}: {number}
          </span>
          <button
            className="button"
            type="button"
            onClick={() => onContactDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
