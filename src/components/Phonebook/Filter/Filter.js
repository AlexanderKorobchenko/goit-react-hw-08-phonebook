import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../../redux/contacts';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <label className={s.label}>
      Search
      <input
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter the contact's name. Search is not case sensitive to the entered characters."
        required
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={value}
      ></input>
    </label>
  );
};

export default Filter;
