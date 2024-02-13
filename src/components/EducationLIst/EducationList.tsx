import React from 'react';
import IEducationListProps from './EducationList.interface';
import EducationItem from 'components/EducationItem';

const EducationList: React.FC<IEducationListProps> = ({ educationList }) => {
  return (
    <div>
      {educationList.map((educationItem) => (
        <EducationItem key={educationItem.key} educationItem={educationItem} />
      ))}
    </div>
  );
};

export default EducationList;
