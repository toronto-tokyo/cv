import React from 'react';
import IProjectsListProps from './ProjectsList.interface';
import ProjectItem from 'components/ProjectItem';

const ProjectsList: React.FC<IProjectsListProps> = ({ projectsList }) => {
  return (
    <div className="relative before:absolute before:top-0 before:left-0 before:border-l-2 before:h-full flex flex-col gap-5">
      {projectsList.map((projectItem) => (
        <ProjectItem key={projectItem.key} projectData={projectItem} />
      ))}
    </div>
  );
};

export default ProjectsList;
