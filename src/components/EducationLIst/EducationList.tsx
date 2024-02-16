import React from 'react';
import IEducationListProps from './EducationList.interface';
import EducationItem from 'components/EducationItem';

const EducationList: React.FC<IEducationListProps> = ({ educationList }) => {
  return (
    <div className="relative before:absolute before:top-0 before:left-0 before:border-l-2 before:h-full flex flex-col gap-5">
      {educationList.map((educationItem) => (
        <EducationItem key={educationItem.key} educationItem={educationItem} />
      ))}
    </div>
  );
};

export default EducationList;
