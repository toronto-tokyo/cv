import React from 'react';
import IContactsItemProps from './ContactsItem.interface';

const ContactsItem: React.FC<IContactsItemProps> = ({ icon, contactData }) => {
  const { href, label } = contactData;
  return (
    <li>
      <a
        className="flex items-center gap-2"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
};

export default ContactsItem;
