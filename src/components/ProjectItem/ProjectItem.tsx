import React from 'react';
import IProjectItemProps from './ProjectItem.interface';

const ProjectItem: React.FC<IProjectItemProps> = ({ projectData }) => {
  const { name, description, pullRequest, deploy, skills } = projectData;
  return (
    <article className="border rounded">
      <a href={name.link} target="_blank" rel="noreferrer">
        {name.label}
      </a>
      {description.map((descriptionParagraph, i) => (
        <p key={i}>{descriptionParagraph}</p>
      ))}
      <div>
        <a href={deploy.link} target="_blank" rel="noreferrer">
          {deploy.label}
        </a>
        <span>&middot;</span>
        <a href={pullRequest.link} target="_blank" rel="noreferrer">
          {pullRequest.label}
        </a>
      </div>
      <ul className="flex gap-1">
        {skills.map((skill, i) => (
          <li key={i} className="px-2 py-1 bg-blue-500 text-white">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectItem;
