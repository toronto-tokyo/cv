import ContactsList from 'components/ContactsList';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const ContactsBlock: React.FC = () => {
  return (
    <section className="flex gap-5 flex-wrap">
      <div className="relative h-72 w-72 rounded-lg overflow-hidden print:hidden">
        <img
          className="absolute top-0 left-0 size-full object-cover"
          src={`${process.env.REACT_APP_PUBLIC_URL}/images/cv-avatar.jpg`}
          alt="Minchuk Ilya"
        />
      </div>
      <div className="grow flex flex-col gap-3">
        <div className="print:flex print:gap-5 print:items-end">
          <h1 className="font-bold text-5xl sm:text-6xl print:text-xl">
            {TEXT_DATA.fullName}
          </h1>
          <p className="print:text-base sm:text-3xl text-gray-500 mb-2 print:mb-0 print:text-black">
            {TEXT_DATA.position}
          </p>
        </div>
        <div>
          <ContactsList contactsData={TEXT_DATA.contacts} />
          <p className="hidden print:block print:text-indigo-800 print:mt-1">
            {TEXT_DATA.personalCV}
          </p>
        </div>
      </div>
      <div />
    </section>
  );
};

export default ContactsBlock;
