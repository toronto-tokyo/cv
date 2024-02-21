import React from 'react';
import IH2Props from './H2.interface';

const H2: React.FC<IH2Props> = ({ children }) => {
  return (
    <h2 className="print:text-2xl text-3xl font-semibold border-b-2 pb-1 mb-5">
      {children}
    </h2>
  );
};

export default H2;
