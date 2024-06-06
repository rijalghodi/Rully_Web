'use client';

import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  Modal,
  Overlay,
  Stack,
  Tabs,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUpload } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import classes from './Upload.module.css';

import { GradeTask } from './GradeTask';
import { RecognizeTask } from './RecognizeTask';

import Sample1 from '~/sample1.png';
import Sample2 from '~/sample2.png';
import Sample3 from '~/sample3.png';
import Sparkles from '~/sparkles.png';

const examples = [
  {
    path: '/sample1.png',
    image: Sample1,
  },
  {
    path: '/sample2.png',
    image: Sample2,
  },
  {
    path: '/sample3.png',
    image: Sample3,
  },
];

export function UploadImageBox() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [service, setService] = useState<string | null>('detect');
  const [formOpened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setTimeout(
      () => {
        open();
      },
      0.5 * 60 * 1000,
    );
  }, []); // eslint-disable-line

  const handleInputFile = () => {
    const btn = document.getElementById('fileInput');
    btn?.click();
  };

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleUseSample = async (url: string) => {
    // Fetch the file data as a blob
    const response = await fetch(url);
    const blob = await response.blob();

    const name = url.substring(url.lastIndexOf('/') + 1);

    // Create a new File object
    const sampleFile = new File([blob], name, {
      type: 'image/png',
    });

    setFile(sampleFile);
  };

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  }, [file]);

  const Examples = () => {
    return (
      <Group justify="center" align="center" gap="xs">
        {examples.map((v, i) => (
          <UnstyledButton onClick={() => handleUseSample(v.path)} key={i}>
            <Image
              src={v.image}
              alt={`Sample ${i}`}
              width={44}
              height={44}
              style={{ borderRadius: 8 }}
            />
          </UnstyledButton>
        ))}
      </Group>
    );
  };

  return (
    <>
      <Modal
        opened={formOpened}
        onClose={close}
        size="md"
        title={
          <Title order={2} fz="lg" fw={600}>
            Tunggu Sebentar...
          </Title>
        }
        padding="lg"
        centered
      >
        <Stack>
          <Text>Sekarang Rully masih dalam tahap pengembangan. 🚀</Text>
          <Text>
            Kamu beruntung! Kamu bisa ikut{' '}
            <span style={{ fontWeight: 600 }}>daftar tunggu</span> untuk
            mendapat diskon dan prioritas saat perilisan Rully 👏
          </Text>
          <Button
            component="a"
            href={process.env.NEXT_PUBLIC_WAIT_LIST_LINK}
            target="_blank"
          >
            Ikut Daftar Tunggu
          </Button>
        </Stack>
      </Modal>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        multiple={false}
      />
      {!file && (
        <Stack align="center" maw={400} mx="auto" py={100}>
          <Title order={2} fz={28} fw={700} ta="center" pos="relative">
            <Image
              src={Sparkles}
              alt="Sparkles"
              placeholder="blur"
              width={32}
              height={32}
              style={{
                position: 'absolute',
                top: -32,
                right: -20,
              }}
            />
            Unggah Gambar Jawaban Pilgan untuk Dinilai
          </Title>

          <Button
            size="lg"
            radius={100}
            leftSection={<IconUpload size={20} />}
            onClick={handleInputFile}
          >
            Unggah Gambar
          </Button>
          <Stack align="center" gap="xs">
            <Text>Atau gunakan gambar sample ini:</Text>
            <Examples />
          </Stack>
        </Stack>
      )}
      {file && imageUrl && (
        <Stack w="100%" pt="md" pb="xl">
          <Flex
            align={{ md: 'flex-start', base: 'center' }}
            w="100%"
            justify="center"
            direction={{ md: 'row', base: 'column' }}
            gap="xl"
            mih={400}
          >
            <Group justify="flex-end" flex={2}>
              <Stack gap={8}>
                <Box
                  pos="relative"
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                    lineHeight: 0,
                    verticalAlign: 'middle',
                    fontSize: 0,
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt="Pratinjau"
                    width={0}
                    height={0}
                    className={classes['image-preview']}
                  />
                  <UnstyledButton onClick={handleInputFile}>
                    <Overlay
                      className={classes['image-preview-overlay']}
                      color="#000"
                      backgroundOpacity={0.6}
                      zIndex={1}
                    >
                      <Center h="100%">
                        <Group c="white" justify="center" align="center">
                          <IconUpload size={22} />
                          <Text fz="xl">Ganti Gambar</Text>
                        </Group>
                      </Center>
                    </Overlay>
                  </UnstyledButton>
                </Box>
                <Text fz="xs" ta="center">
                  {file.name}
                </Text>
                <Stack align="center" gap="xs" mt="sm">
                  <Text ta="center" fz="sm">
                    Bisa gunakan gambar sample ini:
                  </Text>
                  <Examples />
                </Stack>
              </Stack>
            </Group>
            <Tabs
              miw={300}
              flex={3}
              value={service}
              onChange={setService}
              keepMounted
              w="100%"
            >
              <Tabs.List grow mb="md">
                <Tabs.Tab
                  value="detect"
                  fz="lg"
                  fw={500}
                  style={{ borderBottomWidth: 4 }}
                >
                  Deteksi
                </Tabs.Tab>
                <Tabs.Tab
                  value="grade"
                  fz="lg"
                  fw={500}
                  style={{ borderBottomWidth: 4 }}
                >
                  Penilaian
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="detect">
                <RecognizeTask file={file} onInputFile={handleInputFile} />
              </Tabs.Panel>
              <Tabs.Panel value="grade">
                <GradeTask file={file} onInputFile={handleInputFile} />
              </Tabs.Panel>
            </Tabs>
          </Flex>
          <Text fz="sm" c="dark.3" ta="center" mt="xl">
            Rully mungkin melakukan kesalahan. Periksa kembali hasil kerjanya.
          </Text>
        </Stack>
      )}
    </>
  );
}
