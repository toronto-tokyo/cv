import React from 'react';
import IEducationListProps from './EducationList.interface';
import EducationItem from 'components/EducationItem';
import ContentOrderList from 'components/ContentOrderList';

const EducationList: React.FC<IEducationListProps> = ({ educationList }) => {
  return (
    <ContentOrderList>
      {educationList.map((educationItem) => (
        <EducationItem key={educationItem.key} educationItem={educationItem} />
      ))}
    </ContentOrderList>
  );
};

export default EducationList;
