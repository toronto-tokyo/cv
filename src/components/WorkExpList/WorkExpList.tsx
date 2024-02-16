import React from 'react';
import IWorkExpListProps from './WorkExpList.interface';
import WorkExpItem from 'components/WorkExpItem';

const WorkExpList: React.FC<IWorkExpListProps> = ({ workExpList }) => {
  return (
    <div className="relative before:absolute before:top-0 before:left-0 before:border-l-2 before:h-full flex flex-col gap-5">
      {workExpList.map((workExpItem) => (
        <WorkExpItem key={workExpItem.key} workExpData={workExpItem} />
      ))}
    </div>
  );
};

export default WorkExpList;
