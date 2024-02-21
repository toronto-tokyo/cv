import React from 'react';
import IEducationItemProps from './EducationItem.interface';
import ContentOrderItem from 'components/ContentOrderItem';

const EducationItem: React.FC<IEducationItemProps> = ({ educationItem }) => {
  const { description, organization, profession, place } = educationItem;
  const { label, link } = organization;
  return (
    <ContentOrderItem>
      <h3 className="text-2xl print:text-xl font-semibold">{profession}</h3>
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
      <p className="text-xl print:text-lg text-justify">{description}</p>
    </ContentOrderItem>
  );
};

export default EducationItem;
