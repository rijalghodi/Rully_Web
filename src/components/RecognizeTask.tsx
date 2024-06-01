import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  Loader,
  Stack,
  Text,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconSparkles, IconUpload } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

import { apiClient } from '@/service/api-client';

import { convertToGroupedArray } from './utils';
type Props = {
  file: File | null;
  onInputFile?: () => void;
};

type DetectSheetResponse = {
  marks: string[];
};
export function RecognizeTask({ file, onInputFile }: Props) {
  const [detectedMarks, setDetectedMarks] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRecognizeSheet = async () => {
    setLoading(true);
    if (!file) {
      notifications.show({
        title: 'Gagal Melakukan Deteksi',
        message: 'Pilih file terlebih dahulu',
        type: 'error',
        color: 'orange',
      });
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    const res = await apiClient.post<DetectSheetResponse>(
      '/bubble/sheet',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const marks = res.data.marks;
    setDetectedMarks(marks);
    setLoading(false);
  };

  useEffect(() => {
    setDetectedMarks(null);
  }, [file]);

  if (loading) {
    return (
      <Center h={200} w="100%">
        <Loader type="dots" />
      </Center>
    );
  }

  if (detectedMarks && detectedMarks.length > 0) {
    return (
      <Box w="100%">
        <Group justify="space-between" mb="sm">
          <Text component="p" fw={600}>
            Hasil Deteksi Lembar Jawaban
          </Text>
          <Button
            color="yellow"
            size="sm"
            radius={100}
            variant="filled"
            leftSection={<IconSparkles size={18} />}
            onClick={handleRecognizeSheet}
            loading={loading}
            loaderProps={{ type: 'dots' }}
          >
            Ulang Deteksi
          </Button>
        </Group>
        <Flex rowGap="md" columnGap="sm" wrap="wrap">
          {convertToGroupedArray(
            detectedMarks,
            detectedMarks.length > 10 ? 10 : 5,
          ).map((stack, i) => (
            <Stack gap={8} w={184} key={i}>
              {stack.map((item, j) => (
                <Group gap={4} key={j}>
                  <Text span w={24}>
                    {i * (detectedMarks.length > 10 ? 10 : 5) + j + 1}..
                  </Text>
                  <Text span tt="uppercase" fw={500}>
                    {item}
                  </Text>
                </Group>
              ))}
            </Stack>
          ))}
        </Flex>
      </Box>
    );
  }

  if (detectedMarks) {
    return (
      <Center h="200">
        <Stack gap={12}>
          <Text fw={500} fz="lg" ta="center" component="p">
            Deteksi Tidak Ditemukan
          </Text>
          <Text fz="sm" ta="center" component="p">
            Silakan mengganti gambar atau mengulang deteksi
          </Text>
          <Group gap="xs" mt="sm" justify="center">
            <Button
              size="sm"
              radius={100}
              variant="default"
              leftSection={<IconUpload size={16} />}
              onClick={() => onInputFile?.()}
            >
              Ganti Gambar
            </Button>
            <Button
              color="yellow"
              size="sm"
              radius={100}
              variant="filled"
              leftSection={<IconSparkles size={18} />}
              onClick={handleRecognizeSheet}
              loading={loading}
              loaderProps={{ type: 'dots' }}
            >
              Ulang Deteksi
            </Button>
          </Group>
        </Stack>
      </Center>
    );
  }

  return (
    <Center h={200} w="100%">
      <Button
        color="yellow"
        size="md"
        radius={100}
        variant="filled"
        leftSection={<IconSparkles size={18} />}
        onClick={handleRecognizeSheet}
      >
        Jalankan Deteksi
      </Button>
    </Center>
  );
}
