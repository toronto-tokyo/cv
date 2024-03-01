import React from 'react';
import IWorkExpItemProps from './WorkExpItem.interface';
import ContentOrderItem from 'components/ContentOrderItem';

const WorkExpItem: React.FC<IWorkExpItemProps> = ({ workExpData }) => {
  const { position, period, organization, place } = workExpData;
  const { from, to } = period;
  const { label, link } = organization;

  return (
    <ContentOrderItem>
      <h3 className="relative print:text-base text-2xl font-semibold">
        {position}
      </h3>
      <div className="flex gap-1 text-gray-500 print:text-sm">
        <span>{from}</span>
        <span>&minus;</span>
        <span>{to}</span>
      </div>
      <div className="text-xl print:text-sm flex gap-1">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-800"
        >
          {label}
        </a>
        <span>&middot;</span>
        <span>{place}</span>
      </div>
    </ContentOrderItem>
  );
};

export default WorkExpItem;
