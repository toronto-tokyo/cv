import React from 'react';
import IWorkExpItemProps from './WorkExpItem.interface';

const WorkExpItem: React.FC<IWorkExpItemProps> = ({ workExpData }) => {
  const { position, period, organization, place } = workExpData;
  const { from, to } = period;
  const { label, link } = organization;

  return (
    <article>
      <h3>{position}</h3>
      <div>
        <span>{from}</span>
        <span>&minus;</span>
        <span>{to}</span>
      </div>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          {label}
        </a>
        <span>&middot;</span>
        <span>{place}</span>
      </div>
    </article>
  );
};

export default WorkExpItem;
