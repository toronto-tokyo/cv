import CertificatesList from 'components/CertificatesList/CertificatesList';
import ContactsList from 'components/ContactsList/ContactsList';
import EducationLIst from 'components/EducationLIst';
import LanguagesList from 'components/LanguagesList';
import ProjectsList from 'components/ProjectsList';
import SkillsList from 'components/SkillsList';
import ToolsList from 'components/ToolsList';
import WorkExpList from 'components/WorkExpList';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const MainPage: React.FC = () => {
  return (
    <div className="grow p-5 bg-white">
      <div className="flex gap-5">
        <div className="relative pb-[30%] basis-[30%] rounded-lg overflow-hidden">
          <img
            className="absolute top-0 left-0 size-full object-cover"
            src={`${process.env.REACT_APP_PUBLIC_URL}/images/cv-avatar.jpg`}
            alt="Minchuk Ilya"
          />
        </div>
        <div className="grow flex flex-col gap-3">
          <h1 className="font-bold text-6xl">{TEXT_DATA.fullName}</h1>
          <p className="text-3xl text-gray-500 mb-2">{TEXT_DATA.position}</p>
          <ContactsList contactsData={TEXT_DATA.contacts} />
        </div>
        <div />
      </div>
      <section className="py-5">
        <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">
          About Me
        </h2>
        <p className="text-xl text-justify">{TEXT_DATA.aboutMe}</p>
      </section>
      <div className="flex gap-5 justify-between">
        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">
            Skills
          </h2>
          <SkillsList skillsList={TEXT_DATA.skills} />
        </section>
        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">Tools</h2>
          <ToolsList toolsList={TEXT_DATA.tools} />
        </section>
        <section>
          <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">
            Languages
          </h2>
          <LanguagesList languages={TEXT_DATA.languages} />
        </section>
      </div>
      <section className="py-5">
        <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">
          Work Experience
        </h2>
        <WorkExpList workExpList={TEXT_DATA.workExperience} />
      </section>
      <section className="py-5">
        <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">
          Education
        </h2>
        <EducationLIst educationList={TEXT_DATA.education} />
      </section>
      <section className="py-5">
        <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">
          Certificates
        </h2>
        <CertificatesList certificatesList={TEXT_DATA.certificates} />
      </section>
      <section className="py-5">
        <h2 className="text-3xl font-semibold border-b-2 pb-1 mb-5">
          Projects
        </h2>
        <ProjectsList projectsList={TEXT_DATA.projects} />
      </section>
    </div>
  );
};

export default MainPage;
