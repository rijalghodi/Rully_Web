'use client';

import { ActionIcon, AppShell, Group, Tooltip } from '@mantine/core';
import { Text } from '@mantine/core';
import { IconBrandGithub, IconMail, IconPhone } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/Footer';

import Logo from '~/logo.png';

type Props = {
  children: React.ReactNode;
};
export default function CoreLayout({ children }: Props) {
  return (
    <AppShell header={{ height: 70 }} withBorder={false}>
      <AppShell.Header>
        <Group
          gap="md"
          justify="space-between"
          align="center"
          wrap="wrap"
          px={{ base: 'md', lg: 'xl' }}
          py={12}
          h={70}
          w="100%"
          maw={1000}
          mx="auto"
        >
          <Link href="/">
            <Group gap={0}>
              <Image
                src={Logo}
                alt="Logo"
                height={40}
                width={40}
                placeholder="blur"
              />
              <Text fw={600} c="dark 5" fz="lg">
                Rully
              </Text>
              {/* <Text pl="sm">AI-Powered Universal Bubble Sheet Grader</Text> */}
            </Group>
          </Link>
          <Group gap="xs">
            <Tooltip
              label="Lihat Source Code"
              fz="sm"
              position="left"
              withArrow
            >
              <ActionIcon
                component="a"
                href={process.env.NEXT_PUBLIC_GITHUB_LINK}
                variant="subtle"
                color="gray"
                size="lg"
                c="dark.5"
              >
                <IconBrandGithub size={22} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Email Developer" fz="sm" position="left" withArrow>
              <ActionIcon
                component="a"
                href={process.env.NEXT_PUBLIC_EMAIL_LINK}
                variant="subtle"
                color="gray"
                size="lg"
                c="dark.5"
              >
                <IconMail size={22} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Laporkan Keluhan" fz="sm" position="left" withArrow>
              <ActionIcon
                component="a"
                href={process.env.NEXT_PUBLIC_PHONE_LINK}
                variant="subtle"
                color="gray"
                size="lg"
                c="dark.5"
              >
                <IconPhone size={22} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main pt="60px" mih="calc(100vh - 60px - 60px)">
        {children}
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
