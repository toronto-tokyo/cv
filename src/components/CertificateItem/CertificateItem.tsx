import React from 'react';
import ICertificateItemProps from './CertificateItem.interface';

const CertificateItem: React.FC<ICertificateItemProps> = ({
  certificateItem,
}) => {
  const { cerfLink, school, title } = certificateItem;
  const { img, label, link } = school;

  return (
    <article className="border rounded w-52">
      <a
        href={cerfLink}
        target="_blanc"
        rel="noreferrer"
        className="flex flex-col gap-3 items-center p-4"
      >
        <div className="relative pb-[50%] w-full">
          <img
            src={img}
            className="absolute top-0 left-0 size-full object-contain"
          />
        </div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <a
          href={link}
          target="_blanc"
          rel="noreferrer"
          className="border rounded px-2 py-1 w-full text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </a>
      </a>
    </article>
  );
};

export default CertificateItem;
