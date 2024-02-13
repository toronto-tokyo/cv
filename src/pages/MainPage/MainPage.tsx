import ContactsList from 'components/ContactsList/ContactsList';
import LanguagesList from 'components/LanguagesList';
import SkillsList from 'components/SkillsList';
import ToolsList from 'components/ToolsList';
import WorkExpList from 'components/WorkExpList';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const MainPage: React.FC = () => {
  return (
    <div className="grow">
      <div className="flex gap-5">
        <div className="relative pb-[25%] basis-1/4 rounded-lg overflow-hidden">
          <img
            className="absolute top-0 left-0 size-full object-cover"
            src={`${process.env.REACT_APP_PUBLIC_URL}/images/cv-avatar.jpg`}
            alt="Minchuk Ilya"
          />
        </div>
        <div className="grow">
          <h1>{TEXT_DATA.fullName}</h1>
          <p>{TEXT_DATA.position}</p>
          <ContactsList contactsData={TEXT_DATA.contacts} />
        </div>
        <div />
      </div>
      <section>
        <h2>About Me</h2>
        <p>{TEXT_DATA.aboutMe}</p>
      </section>
      <div className="flex gap-5 justify-between">
        <section>
          <h2>Skills</h2>
          <SkillsList skillsList={TEXT_DATA.skills} />
        </section>
        <section>
          <h2>Tools</h2>
          <ToolsList toolsList={TEXT_DATA.tools} />
        </section>
        <section>
          <h2>Languages</h2>
          <LanguagesList languages={TEXT_DATA.languages} />
        </section>
      </div>
      <section>
        <h2>Work Experience</h2>
        <WorkExpList workExpList={TEXT_DATA.workExperience} />
      </section>
    </div>
  );
};

export default MainPage;
