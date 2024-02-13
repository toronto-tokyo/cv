import React from 'react';
import IToolsListProps from './ToolsList.interface';
import ToolsItem from 'components/ToolsItem';
import useToolsList from './ToolsList.hook';

const ToolsList: React.FC<IToolsListProps> = ({ toolsList }) => {
  const { toolsIcons } = useToolsList();

  return (
    <ul>
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
