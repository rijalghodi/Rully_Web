'use client';

import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  Overlay,
  Stack,
  Tabs,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import classes from './Upload.module.css';

import { GradeTask } from './GradeTask';
import { RecognizeTask } from './RecognizeTask';

import Sparkles from '~/sparkles.png';

export function UploadImageBox() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [service, setService] = useState<string | null>('detect');

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

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  }, [file]);

  return (
    <>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        multiple={false}
      />
      {!file && (
        <Stack align="center" maw={400} pt="md" pb="xl" mx="auto" py={100}>
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
                  // placeholder="blur"
                />

                <UnstyledButton onClick={handleInputFile}>
                  <Overlay
                    className={classes['image-preview-overlay']}
                    color="#000"
                    backgroundOpacity={0.5}
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
            Rully bisa melakukan kesalahan. Cek kembali hasil koreksi.
          </Text>
        </Stack>
      )}
    </>
  );
}
