import React from 'react';
import ContentWrapper from 'components/ContentWrapper';
import { IMainProps } from './Main.interface';

const Main: React.FC<IMainProps> = ({ children }) => {
  return (
    <main className="grow flex">
      <ContentWrapper>{children}</ContentWrapper>
    </main>
  );
};

export default Main;
