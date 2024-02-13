import React from 'react';
import IWorkExpListProps from './WorkExpList.interface';
import WorkExpItem from 'components/WorkExpItem';

const WorkExpList: React.FC<IWorkExpListProps> = ({ workExpList }) => {
  return (
    <div>
      {workExpList.map((workExpItem) => (
        <WorkExpItem key={workExpItem.key} workExpData={workExpItem} />
      ))}
    </div>
  );
};

export default WorkExpList;
