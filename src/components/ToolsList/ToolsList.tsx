import React from 'react';
import IToolsListProps from './ToolsList.interface';
import ToolsItem from 'components/ToolsItem';
import useToolsList from './ToolsList.hook';

const ToolsList: React.FC<IToolsListProps> = ({ toolsList }) => {
  const { toolsIcons } = useToolsList();

  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
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
