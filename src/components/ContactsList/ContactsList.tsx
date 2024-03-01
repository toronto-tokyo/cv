import React from 'react';
import IContactsListProps, { IContactType } from './ContactsList.interface';
import ContactsItem from 'components/ContactsItem';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

const ContactsList: React.FC<IContactsListProps> = ({ contactsData }) => {
  const contactsListIcons: Record<IContactType, React.ReactNode> = {
    email: <MdOutlineEmail />,
    mobilePhone: <LuPhone />,
    gitHub: <FaGithub />,
    linkedin: <CiLinkedin />,
  };
  return (
    <ul className="grid grid-cols-contacts gap-1 text-xl text-indigo-800 print:text-sm">
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
