import React from 'react';
import { IContentWrapperProps } from './ContentWrapper.interface';

const ContentWrapper: React.FC<IContentWrapperProps> = ({ children }) => {
  return <div className="grow max-w-7xl mx-auto px-5 flex">{children}</div>;
};

export default ContentWrapper;
