import { Container } from '@mantine/core';
import React from 'react';

import { UploadImageBox } from '@/components/UploadImageBox';

export default function UploadPage() {
  return (
    <Container
      mih="calc(100vh - 60px - 60px)"
      maw={1200}
      w="100%"
      px={{ base: 'md', sm: 'xl' }}
      component="section"
      mx="auto"
      pt={40}
    >
      <UploadImageBox />
    </Container>
  );
}
