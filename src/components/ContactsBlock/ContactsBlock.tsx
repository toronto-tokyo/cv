import ContactsList from 'components/ContactsList';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const ContactsBlock: React.FC = () => {
  return (
    <section className="flex gap-5 flex-wrap">
      <div className="relative h-72 w-72 rounded-lg overflow-hidden">
        <img
          className="absolute top-0 left-0 size-full object-cover"
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/cv-avatar.jpg`}
          alt="Minchuk Ilya"
        />
      </div>
      <div className="grow flex flex-col gap-3">
        <h1 className="font-bold text-5xl sm:text-6xl">{TEXT_DATA.fullName}</h1>
        <p className="print:text-2xl sm:text-3xl text-gray-500 mb-2">
          {TEXT_DATA.position}
        </p>
        <ContactsList contactsData={TEXT_DATA.contacts} />
      </div>
      <div />
    </section>
  );
};

export default ContactsBlock;
