import H2 from 'components/H2';
import ProjectsList from 'components/ProjectsList';
import SectionBlock from 'components/SectionBlock';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const ProjectsBlock: React.FC = () => {
  return (
    <SectionBlock className="print:mt-16">
      <H2>Projects</H2>
      <ProjectsList projectsList={TEXT_DATA.projects} />
    </SectionBlock>
  );
};

export default ProjectsBlock;
