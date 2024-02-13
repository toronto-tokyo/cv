import React from 'react';
import ISkillsItemProps from './SkillsItem.interface';

const SkillsItems: React.FC<ISkillsItemProps> = ({ icon, data }) => {
  return (
    <li className="flex gap-2 items-center">
      {icon}
      {data}
    </li>
  );
};

export default SkillsItems;
