import React from 'react';
import IEducationItemProps from './EducationItem.interface';

const EducationItem: React.FC<IEducationItemProps> = ({ educationItem }) => {
  const { description, organization, profession, place } = educationItem;
  const { label, link } = organization;
  return (
    <article>
      <h3>{profession}</h3>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          {label}
        </a>
        <span>&middot;</span>
        <span>{place}</span>
      </div>
      <p>{description}</p>
    </article>
  );
};

export default EducationItem;
