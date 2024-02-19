import React from 'react';
import ContentWrapper from 'components/ContentWrapper';
import TEXT_DATA from 'shared/text-data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <ContentWrapper>
        <div className="grow flex items-center justify-center py-5">
          {TEXT_DATA.yearOfCreation}
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
