'use client';

import {
  Box,
  Button,
  Center,
  FileButton,
  Flex,
  Group,
  Overlay,
  Stack,
  Tabs,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { IconSparkles, IconUpload } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import classes from './Upload.module.css';
import { Hero } from './Hero';

export function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [service, setService] = useState<string | null>('detect');

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  }, [file]);

  if (!file) {
    return <Hero />;
  }

  return <></>;
}
