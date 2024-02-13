import React from 'react';
import IToolsItemProps from './ToolsItem.interface';

const TodoItem: React.FC<IToolsItemProps> = ({ icon, data }) => {
  return (
    <li className="flex gap-2 items-center">
      {icon}
      {data}
    </li>
  );
};

export default TodoItem;
