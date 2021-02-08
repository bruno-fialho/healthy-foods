import React from 'react';

import { Container, CopyrightsBox, LinksBox } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <CopyrightsBox>
        <p>Copyrights 2021 Stack. All Rights Reserved.</p>
      </CopyrightsBox>
      <LinksBox>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </LinksBox>
    </Container>
  );
};

export default Footer;
