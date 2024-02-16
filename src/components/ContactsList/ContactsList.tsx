import React from 'react';
import IContactsListProps from './ContactsList.interface';
import ContactsItem from 'components/ContactsItem';
import useContactsList from './ContactsList.hook';

const ContactsList: React.FC<IContactsListProps> = ({ contactsData }) => {
  const { contactsListIcons } = useContactsList();

  return (
    <ul className="flex flex-col gap-1 text-xl text-indigo-800">
      {Object.entries(contactsData).map(([key, contactData]) => (
        <ContactsItem
          key={key}
          icon={contactsListIcons[key as keyof typeof contactsData]}
          contactData={contactData}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
