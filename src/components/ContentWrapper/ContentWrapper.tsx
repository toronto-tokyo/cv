import React from 'react';
import { IContentWrapperProps } from './ContentWrapper.interface';

const ContentWrapper: React.FC<IContentWrapperProps> = ({ children }) => {
  return <div className="grow max-w-5xl mx-auto flex">{children}</div>;
};

export default ContentWrapper;
