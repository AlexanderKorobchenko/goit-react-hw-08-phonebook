import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../../redux/contacts';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  function filtration(value) {
    if (value === '') {
      return contacts;
    } else {
      return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }

  return (
    <ul className={s.list}>
      {filtration(filter).map(contact => {
        return (
          <li className={s.item} key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className={s.button}
              type="button"
              id={contact.id}
              onClick={() => onDeleteContact(contact.id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
