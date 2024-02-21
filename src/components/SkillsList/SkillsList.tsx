import React from 'react';
import ISkillsListProps from './SkillsList.interface';
import SkillsItem from 'components/SkillsItem';
import { FaHtml5, FaReact, FaGitAlt } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiSass, SiTailwindcss } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiRedux, SiNextdotjs, SiTestinglibrary } from 'react-icons/si';

const SkillsList: React.FC<ISkillsListProps> = ({ skillsList }) => {
  const skillsIcons = {
    html: <FaHtml5 className="text-orange-500" />,
    css: <IoLogoCss3 className="text-blue-500" />,
    scss: <SiSass className="text-pink-500" />,
    tailwind: <SiTailwindcss className="text-blue-500" />,
    javaScript: <RiJavascriptFill className="text-yellow-500" />,
    typeScript: <BiLogoTypescript className="text-blue-500" />,
    react: <FaReact className="text-blue-500" />,
    rtk: <SiRedux className="text-purple-500" />,
    next: <SiNextdotjs />,
    git: <FaGitAlt className="text-red-500" />,
    testingLibrary: <SiTestinglibrary className="text-red-500" />,
  };

  return (
    <ul className="grid grid-cols-skills sm:grid-cols-2 gap-x-2 gap-y-1">
      {skillsList.map((skillItem) => (
        <SkillsItem
          key={skillItem.key}
          data={skillItem.data}
          icon={skillsIcons[skillItem.key as keyof typeof skillsIcons]}
        />
      ))}
    </ul>
  );
};

export default SkillsList;
