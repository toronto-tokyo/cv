import H2 from 'components/H2';
import LanguagesList from 'components/LanguagesList';
import SkillsList from 'components/SkillsList';
import ToolsList from 'components/ToolsList';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const SkillsBlock: React.FC = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-10 text-lg print:text-sm">
      <article key="tech-stack">
        <H2>Tech stack</H2>
        <SkillsList skillsList={TEXT_DATA.skills} />
      </article>
      <article key="tools">
        <H2>Tools</H2>
        <ToolsList toolsList={TEXT_DATA.tools} />
      </article>
      <article key="languages">
        <H2>Languages</H2>
        <LanguagesList languages={TEXT_DATA.languages} />
      </article>
    </section>
  );
};

export default SkillsBlock;
