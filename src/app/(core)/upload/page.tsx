import { Center } from '@mantine/core';
import React from 'react';

import { UploadImageBox } from '@/components/UploadImageBox';

export default function Home() {
  return (
    <Center
      mih="calc(100vh - 60px - 60px)"
      maw={1200}
      w="100%"
      px={{ base: 'md', sm: 'xl' }}
      component="section"
      mx="auto"
    >
      <UploadImageBox />
    </Center>
  );
}
