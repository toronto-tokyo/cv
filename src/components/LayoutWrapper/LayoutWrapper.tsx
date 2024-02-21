import React from 'react';
import { ILayoutWrapperProps } from './LayoutWrapper.interface';

const LayoutWrapper: React.FC<ILayoutWrapperProps> = ({ children }) => {
  return <div className="flex flex-col min-h-dvh">{children}</div>;
};

export default LayoutWrapper;
