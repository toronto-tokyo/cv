import React from 'react';
import IProjectItemProps from './ProjectItem.interface';

const ProjectItem: React.FC<IProjectItemProps> = ({ projectData }) => {
  const { name, description, pullRequest, deploy, skills } = projectData;
  return (
    <article className="pl-5 before:w-3 before:h-3 print:before:w-2 print:before:h-2 before:absolute before: top-0 before:left-0 before:rounded-full before:bg-amber-500 before:translate-x-[-50%] before:translate-y-full">
      <h3 className="font-semibold text-2xl print:text-base mb-2 print:mb-1">
        <a href={name.link} target="_blank" rel="noreferrer">
          {name.label}
        </a>
      </h3>
      <div className="text-justify text-xl print:text-sm">
        {description.map((descriptionParagraph, i) => (
          <p key={i}>{descriptionParagraph}</p>
        ))}
      </div>
      <div className="flex gap-1 text-xl mb-3 print:hidden">
        <a
          href={deploy.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-800"
        >
          {deploy.label}
        </a>
        <span>&middot;</span>
        <a
          href={pullRequest.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-800"
        >
          {pullRequest.label}
        </a>
      </div>
      <ul className="flex gap-1 flex-wrap print:text:sm">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="px-2 py-[2px] bg-blue-600 print:bg-white print:border print:text-black print:text-sm text-white rounded"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectItem;
