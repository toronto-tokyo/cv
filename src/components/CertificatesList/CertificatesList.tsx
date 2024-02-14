import React from 'react';
import ICertificatesListProps from './CertificatesList.interface';
import CertificateItem from 'components/CertificateItem/CertificateItem';

const CertificatesList: React.FC<ICertificatesListProps> = ({
  certificatesList,
}) => {
  return (
    <div className="grid grid-cols-3 justify-items-center">
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
