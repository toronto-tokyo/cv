import H2 from 'components/H2';
import SectionBlock from 'components/SectionBlock';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const AboutMeBlock: React.FC = () => {
  return (
    <SectionBlock>
      <H2>About Me</H2>
      <p className="print:text-lg text-xl text-justify">{TEXT_DATA.aboutMe}</p>
    </SectionBlock>
  );
};

export default AboutMeBlock;
