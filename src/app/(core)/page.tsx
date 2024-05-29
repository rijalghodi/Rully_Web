import { Container, Stack } from '@mantine/core';
import React from 'react';

import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <Stack w="100%" pos="relative">
      <Container maw={1400} px={{ base: 'md', sm: 'xl' }} component="section">
        <Hero />
      </Container>
    </Stack>
  );
}
