import H2 from 'components/H2';
import SectionBlock from 'components/SectionBlock';
import WorkExpList from 'components/WorkExpList';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const WorkExpBlock: React.FC = () => {
  return (
    <SectionBlock className="basis-1/3">
      <H2>Work Experience</H2>
      <WorkExpList workExpList={TEXT_DATA.workExperience} />
    </SectionBlock>
  );
};

export default WorkExpBlock;
