import React from 'react';
import ICertificateItemProps from './CertificateItem.interface';

const CertificateItem: React.FC<ICertificateItemProps> = ({
  certificateItem,
}) => {
  const { cerfLink, school, title } = certificateItem;
  const { img, label, link } = school;

  return (
    <article className="shadow-md transition-all hover:scale-105 rounded w-60 md:w-52">
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
          className="border hover:border-black rounded px-2 py-1 w-full text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </a>
      </a>
    </article>
  );
};

export default CertificateItem;
