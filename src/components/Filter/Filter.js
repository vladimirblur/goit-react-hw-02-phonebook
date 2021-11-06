import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  const fitlterId = uuidv4();
  return (
    <div className={s.filter}>
      <label className={s.label} htmlFor={fitlterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        id={fitlterId}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
