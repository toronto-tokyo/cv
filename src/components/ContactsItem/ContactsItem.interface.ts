interface IContactsItemProps {
  icon: React.ReactNode;
  contactData: IContactData;
}

interface IContactData {
  href: string;
  label: string;
}

export default IContactsItemProps;
