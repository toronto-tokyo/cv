interface IContactsListProps {
  contactsData: Record<IContactType, IContactData>;
}

export type IContactType = 'email' | 'mobilePhone' | 'gitHub' | 'linkedin';

export type IContactData = {
  href: string;
  label: string;
};

export default IContactsListProps;
