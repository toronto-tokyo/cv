import React from 'react';
import IEducationItemProps from './EducationItem.interface';

const EducationItem: React.FC<IEducationItemProps> = ({ educationItem }) => {
  const { description, organization, profession, place } = educationItem;
  const { label, link } = organization;
  return (
    <article className="pl-5 before:w-3 before:h-3 before:absolute before: top-0 before:left-0 before:rounded-full before:bg-amber-500 before:translate-x-[-50%] before:translate-y-full">
      <h3 className="text-2xl font-semibold">{profession}</h3>
      <div className="flex gap-1 text-gray-500">
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
      <p className="text-xl text-justify">{description}</p>
    </article>
  );
};

export default EducationItem;
