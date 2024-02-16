import React from 'react';
import IWorkExpItemProps from './WorkExpItem.interface';

const WorkExpItem: React.FC<IWorkExpItemProps> = ({ workExpData }) => {
  const { position, period, organization, place } = workExpData;
  const { from, to } = period;
  const { label, link } = organization;

  return (
    <article className="pl-5 before:w-3 before:h-3 before:absolute before: top-0 before:left-0 before:rounded-full before:bg-amber-500 before:translate-x-[-50%] before:translate-y-full">
      <h3 className="relative text-2xl font-semibold">{position}</h3>
      <div className="flex gap-1 text-gray-500">
        <span>{from}</span>
        <span>&minus;</span>
        <span>{to}</span>
      </div>
      <div className="text-xl flex gap-1">
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
    </article>
  );
};

export default WorkExpItem;
