import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import ContactsListStyled from './ContactsListStyle.styled';
import { getContactsList } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  return (
    <ContactsListStyled>
      {contacts
        ?.filter(
          contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <ContactItem
            userName={contact.name}
            userNumber={contact.number}
            id={contact.id}
            key={contact.id}
          />
        ))}
    </ContactsListStyled>
  );
};

export default ContactList;
