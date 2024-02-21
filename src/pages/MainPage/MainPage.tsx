import AboutMeBlock from 'components/AboutMeBlock';
import CertificatesBlock from 'components/CertificatesBlock';
import ContactsBlock from 'components/ContactsBlock';
import EducationBlock from 'components/EducationBlock';
import ProjectsBlock from 'components/ProjectsBlock';
import SkillsBlock from 'components/SkillsBlock';
import WorkExpBlock from 'components/WorkExpBlock';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="grow p-5 bg-white">
      <ContactsBlock />
      <AboutMeBlock />
      <SkillsBlock />
      <WorkExpBlock />
      <EducationBlock />
      <CertificatesBlock />
      <ProjectsBlock />
    </div>
  );
};

export default MainPage;
