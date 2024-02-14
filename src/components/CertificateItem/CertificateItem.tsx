import React from 'react';
import ICertificateItemProps from './CertificateItem.interface';

const CertificateItem: React.FC<ICertificateItemProps> = ({
  certificateItem,
}) => {
  const { cerfLink, school, title } = certificateItem;
  const { img, label, link } = school;

  return (
    <article className="border">
      <a
        href={cerfLink}
        target="_blanc"
        rel="noreferrer"
        className="flex flex-col items-center"
      >
        <div className="relative pb-[30%] w-full">
          <img
            src={img}
            className="absolute top-0 left-0 size-full object-contain"
          />
        </div>
        <p>{title}</p>
        <a href={link} target="_blanc" rel="noreferrer">
          {label}
        </a>
      </a>
    </article>
  );
};

export default CertificateItem;
