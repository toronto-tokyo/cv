import React from 'react';
import IToolsListProps from './ToolsList.interface';
import ToolsItem from 'components/ToolsItem';
import { FaTrello } from 'react-icons/fa';
import {
  SiWebpack,
  SiVisualstudiocode,
  SiEslint,
  SiPrettier,
} from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { PiDogFill } from 'react-icons/pi';

const ToolsList: React.FC<IToolsListProps> = ({ toolsList }) => {
  const toolsIcons = {
    trello: <FaTrello className="text-blue-500" />,
    webpack: <SiWebpack className="text-blue-600" />,
    vite: <TbBrandVite className="text-purple-500" />,
    vsCode: <SiVisualstudiocode className="text-blue-600" />,
    eslint: <SiEslint className="text-purple-700" />,
    prettier: <SiPrettier className="text-purple-500" />,
    husky: <PiDogFill className="text-yellow-800" />,
  };

  return (
    <ul className="grid grid-cols-skills sm:grid-cols-2 gap-x-3 gap-y-1">
      {toolsList.map((toolsItem) => (
        <ToolsItem
          key={toolsItem.key}
          data={toolsItem.data}
          icon={toolsIcons[toolsItem.key as keyof typeof toolsIcons]}
        />
      ))}
    </ul>
  );
};

export default ToolsList;
