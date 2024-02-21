import React from 'react';
import IContentOrderListProps from './ContentOrderList.interface';

const ContentOrderList: React.FC<IContentOrderListProps> = ({ children }) => {
  return (
    <div className="relative before:absolute before:top-0 before:left-0 before:border-l-2 before:h-full flex flex-col gap-5">
      {children}
    </div>
  );
};

export default ContentOrderList;
