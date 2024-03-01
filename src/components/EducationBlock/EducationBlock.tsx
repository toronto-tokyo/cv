import EducationLIst from 'components/EducationLIst';
import H2 from 'components/H2';
import SectionBlock from 'components/SectionBlock';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const EducationBlock: React.FC = () => {
  return (
    <SectionBlock className="basis-2/3">
      <H2>Education</H2>
      <EducationLIst educationList={TEXT_DATA.education} />
    </SectionBlock>
  );
};

export default EducationBlock;
