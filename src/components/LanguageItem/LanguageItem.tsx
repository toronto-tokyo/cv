import React from 'react';
import ILanguageItemProps from './LanguageItem.interface';

const LanguageItem: React.FC<ILanguageItemProps> = ({ label, data, icon }) => {
  return (
    <li className="flex items-center">
      <span className="flex items-center justify-center mr-2">{icon}</span>
      <span>{label}</span>
      <span>-</span>
      <span>{data}</span>
    </li>
  );
};

export default LanguageItem;
