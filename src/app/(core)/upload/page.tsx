import { Container, Stack } from '@mantine/core';
import React from 'react';

export default function Home() {
  return (
    <Stack w="100%" pos="relative">
      <Container maw={1400} px={{ base: 'md', sm: 'xl' }} component="section">
        Upload
      </Container>
    </Stack>
  );
}
