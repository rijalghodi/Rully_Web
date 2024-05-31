import { Center } from '@mantine/core';
import React from 'react';

import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <Center
      mih="calc(100vh - 60px - 60px)"
      maw={1400}
      w="100%"
      px={{ base: 'md', sm: 'xl' }}
      component="section"
      mx="auto"
    >
      <Hero />
    </Center>
  );
}
