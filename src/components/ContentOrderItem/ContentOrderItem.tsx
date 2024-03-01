import React from 'react';
import IContentOrderItemProps from './ContentOrderItem.interface';

const ContentOrderItem: React.FC<IContentOrderItemProps> = ({ children }) => {
  return (
    <article className="pl-5 before:w-3 before:h-3 print:before:w-2 print:before:h-2 before:absolute before: top-0 before:left-0 before:rounded-full before:bg-amber-500 before:translate-x-[-50%] before:translate-y-full">
      {children}
    </article>
  );
};

export default ContentOrderItem;
