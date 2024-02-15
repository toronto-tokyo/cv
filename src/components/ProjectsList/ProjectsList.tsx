import React from 'react';
import IProjectsListProps from './ProjectsList.interface';
import ProjectItem from 'components/ProjectItem';

const ProjectsList: React.FC<IProjectsListProps> = ({ projectsList }) => {
  return (
    <div className="flex flex-col gap-3">
      {projectsList.map((projectItem) => (
        <ProjectItem key={projectItem.key} projectData={projectItem} />
      ))}
    </div>
  );
};

export default ProjectsList;
