import React from 'react';
import ISkillsListProps from './SkillsList.interface';
import SkillsItem from 'components/SkillsItem';
import useSkillsList from './SkillsList.hook';

const SkillsList: React.FC<ISkillsListProps> = ({ skillsList }) => {
  const { skillsIcons } = useSkillsList();

  return (
    <ul className="grid grid-cols-skills sm:grid-cols-2 gap-x-2 gap-y-1">
      {skillsList.map((skillItem) => (
        <SkillsItem
          key={skillItem.key}
          data={skillItem.data}
          icon={skillsIcons[skillItem.key as keyof typeof skillsIcons]}
        />
      ))}
    </ul>
  );
};

export default SkillsList;
