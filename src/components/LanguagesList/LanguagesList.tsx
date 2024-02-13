import React from 'react';
import ILanguagesListProps from './LanguagesList.interface';
import LanguageItem from 'components/LanguageItem';

const LanguagesList: React.FC<ILanguagesListProps> = ({ languages }) => {
  return (
    <ul>
      {Object.entries(languages).map(([key, languageData]) => (
        <LanguageItem
          key={key}
          label={languageData.label}
          data={languageData.data}
        />
      ))}
    </ul>
  );
};

export default LanguagesList;
