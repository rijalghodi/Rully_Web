import {
  Box,
  Button,
  Center,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import classes from './Hero.module.css';

import heroImage from '~/hero.png';
import sparkles from '~/sparkles.png';
export function Hero() {
  return (
    <Stack pos="relative" pt="md" pb="xl">
      <Box
        style={{
          position: 'absolute',
          left: -120,
          top: 20,
        }}
        visibleFrom="lg"
      >
        <Image
          src={sparkles}
          height={80}
          width={80}
          alt="Sparkles"
          placeholder="blur"
        />
      </Box>
      <Box visibleFrom="lg">
        <Image
          src={sparkles}
          height={80}
          width={80}
          alt="Sparkles"
          placeholder="blur"
          style={{
            position: 'absolute',
            right: -120,
            bottom: 20,
          }}
        />
      </Box>
      <Flex
        justify="center"
        align="center"
        gap={36}
        direction={{ lg: 'row', base: 'column' }}
      >
        <Flex
          direction={{ lg: 'column', sm: 'row', base: 'column' }}
          gap={24}
          align="center"
          justify="center"
        >
          <Image
            src={heroImage}
            height={0}
            width={0}
            alt="Hero Rully"
            placeholder="blur"
            className={classes.hero}
          />
          <Box maw={500}>
            <Title
              order={1}
              fz={{ md: 48, xs: 40 }}
              c="dark.4"
              fw={800}
              mb={16}
              ta={{ base: 'center', sm: 'left' }}
            >
              Otomatis Koreksi Jawaban Pilgan
            </Title>
            <Text
              component="p"
              fz={24}
              fw={600}
              ta={{ base: 'center', sm: 'left' }}
            >
              Mudah, Cepat, dan 100%{' '}
              <span
                style={{
                  backgroundColor: 'yellow',
                  paddingLeft: 4,
                  paddingRight: 24,
                  borderBottomRightRadius: 100,
                }}
              >
                Gratis
              </span>
            </Text>
          </Box>
        </Flex>

        <Button
          hiddenFrom="sm"
          color="yellow"
          size="md"
          radius="xl"
          variant="filled"
          component={Link}
          href="/upload"
        >
          Coba Sekarang
        </Button>
        <Paper
          visibleFrom="sm"
          p="xl"
          radius="xl"
          styles={{
            root: {
              boxShadow: 'rgba(0, 0, 0, 0.15) 0px 10px 50px',
            },
          }}
        >
          <Center mih={200} maw={300}>
            <Stack gap={32} align="center">
              <Box>
                <Title order={2} fz={20} ta="center" mb={16}>
                  Caranya Gampang!
                </Title>
                <Text ta="center">
                  Foto lembar jawaban pilihan ganda kamu lalu unggah di sini
                </Text>
              </Box>
              <Button
                visibleFrom="sm"
                color="yellow"
                size="md"
                radius="xl"
                variant="filled"
                component={Link}
                href="/upload"
              >
                Coba Sekarang
              </Button>
            </Stack>
          </Center>
        </Paper>
      </Flex>
    </Stack>
  );
}
