import React from 'react';
import ISectionBlockProps from './SectionBlock.interface';

const SectionBlock: React.FC<ISectionBlockProps> = ({
  children,
  className,
}) => {
  return (
    <section className={`py-5 ${className || ''} print:py-3`}>
      {children}
    </section>
  );
};

export default SectionBlock;
