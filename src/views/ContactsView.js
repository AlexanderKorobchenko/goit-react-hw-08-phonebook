import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../components/Phonebook/ContactList';
import ContactForm from '../components/Phonebook/ContactForm';
import Filter from '../components/Phonebook/Filter';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector(contactsSelectors.getAllContacts);

  // const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);

  return (
    <>
      <ContactForm contacts={contacts} />
      <Filter />
      <ContactList />
    </>
  );
}
