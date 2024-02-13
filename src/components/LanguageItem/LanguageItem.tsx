import React from 'react';
import ILanguageItemProps from './LanguageItem.interface';

const LanguageItem: React.FC<ILanguageItemProps> = ({ label, data }) => {
  return (
    <li className="flex">
      <span>{label}</span>
      <span>-</span>
      <span>{data}</span>
    </li>
  );
};

export default LanguageItem;
