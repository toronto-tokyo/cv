import React from 'react';
import ILanguagesListProps from './LanguagesList.interface';
import LanguageItem from 'components/LanguageItem';
import ReactCountryFlag from 'react-country-flag';
import COUNTRY_CODES from 'shared/country-codes';

const LanguagesList: React.FC<ILanguagesListProps> = ({ languages }) => {
  return (
    <ul>
      {Object.entries(languages).map(([key, languageData]) => (
        <LanguageItem
          icon={
            <ReactCountryFlag
              countryCode={COUNTRY_CODES[key as keyof typeof COUNTRY_CODES]}
              svg
            />
          }
          key={key}
          label={languageData.label}
          data={languageData.data}
        />
      ))}
    </ul>
  );
};

export default LanguagesList;
