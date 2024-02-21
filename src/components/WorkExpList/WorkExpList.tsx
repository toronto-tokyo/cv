import React from 'react';
import IWorkExpListProps from './WorkExpList.interface';
import WorkExpItem from 'components/WorkExpItem';
import ContentOrderList from 'components/ContentOrderList';

const WorkExpList: React.FC<IWorkExpListProps> = ({ workExpList }) => {
  return (
    <ContentOrderList>
      {workExpList.map((workExpItem) => (
        <WorkExpItem key={workExpItem.key} workExpData={workExpItem} />
      ))}
    </ContentOrderList>
  );
};

export default WorkExpList;
