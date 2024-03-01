import CertificatesList from 'components/CertificatesList/CertificatesList';
import H2 from 'components/H2';
import SectionBlock from 'components/SectionBlock';
import React from 'react';
import TEXT_DATA from 'shared/text-data';

const CertificatesBlock: React.FC = () => {
  return (
    <SectionBlock className="print:hidden">
      <H2>Certificates</H2>
      <CertificatesList certificatesList={TEXT_DATA.certificates} />
    </SectionBlock>
  );
};

export default CertificatesBlock;
