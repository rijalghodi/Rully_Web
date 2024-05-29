import { Group, Text } from '@mantine/core';
import React from 'react';

const Footer = () => {
  return (
    <Group px={{ base: 'md', sm: 'xl' }} h={60} w="100%" ta="center">
      <Text size="md" mx="auto">
        Made with <span style={{ color: 'red' }}>❤</span> by{' '}
        <a
          style={{ textDecoration: 'underline' }}
          href={process.env.NEXT_PUBLIC_PORTFOLIO_LINK}
        >
          Zal Code
        </a>
      </Text>
    </Group>
  );
};

export default Footer;
