import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { IContactType } from './ContactsList.interface';

const useContactsList = () => {
  const contactsListIcons: Record<IContactType, React.ReactNode> = {
    email: <MdOutlineEmail />,
    mobilePhone: <LuPhone />,
    gitHub: <FaGithub />,
    linkedin: <CiLinkedin />,
  };
  return { contactsListIcons };
};

export default useContactsList;
