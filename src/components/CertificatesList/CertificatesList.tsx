import React from 'react';
import ICertificatesListProps from './CertificatesList.interface';
import CertificateItem from 'components/CertificateItem/CertificateItem';

const CertificatesList: React.FC<ICertificatesListProps> = ({
  certificatesList,
}) => {
  return (
    <div className="flex gap-5 justify-around flex-wrap">
      {certificatesList.map((certificateItem) => (
        <CertificateItem
          key={certificateItem.key}
          certificateItem={certificateItem}
        />
      ))}
    </div>
  );
};

export default CertificatesList;
