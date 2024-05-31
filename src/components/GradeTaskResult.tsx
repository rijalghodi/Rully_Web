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
import { IconSparkles, IconUpload } from '@tabler/icons-react';
import React from 'react';

import { convertToGroupedArray } from './utils';
type Props = {
  onInputFile?: () => void;
  detectedMarks?: string[] | null;
  correctMarks?: string[] | null;
  onGrade?: () => void;
  loading?: boolean;
  score?: number | null;
};

type WiseMark = {
  correctMark: string;
  detectedMark?: string;
  isCorrect: boolean;
};

export function GradeTaskResult({
  onInputFile,
  detectedMarks,
  correctMarks,
  onGrade,
  loading,
  score,
}: Props) {
  const wiseMarks: WiseMark[] =
    correctMarks?.map((correctMark, i) => {
      let isCorrect: boolean;
      const detectedMark = detectedMarks?.[i];
      if (detectedMark && detectedMark === correctMark) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
      return {
        correctMark,
        detectedMark,
        isCorrect,
      };
    }) ?? [];

  if (detectedMarks && detectedMarks.length > 0) {
    return (
      <Box w="100%">
        <Group justify="space-between" mb="sm">
          <Text component="p" fw={600}>
            Hasil Penilaian
          </Text>
          <Button
            color="yellow"
            size="sm"
            radius={100}
            variant="filled"
            leftSection={<IconSparkles size={18} />}
            onClick={onGrade}
            loading={loading}
            loaderProps={{ type: 'dots' }}
          >
            Ulang Penilaian
          </Button>
        </Group>
        <Text fz="xl" fw={600}>
          Skor: {score}
        </Text>
        <Flex rowGap="md" columnGap="sm" wrap="wrap">
          {convertToGroupedArray(wiseMarks, wiseMarks.length > 10 ? 10 : 5).map(
            (stack, i) => (
              <Stack gap={4} w={140} key={i}>
                {stack.map((item, j) => (
                  <Text key={j}>
                    {i + j + 1}.{' '}
                    <Text span c={item.isCorrect ? 'green' : 'red'}>
                      {item.detectedMark}
                    </Text>
                    {!item.isCorrect && (
                      <Text span c="red">
                        ({item.correctMark})
                      </Text>
                    )}
                  </Text>
                ))}
              </Stack>
            ),
          )}
        </Flex>
      </Box>
    );
  }

  if (detectedMarks) {
    return (
      <Center mih={100} py="md">
        <Stack gap={12}>
          <Text fw={500} fz="lg" ta="center" component="p">
            Penilaian Tidak Terdeteksi
          </Text>
          <Text fz="sm" ta="center" component="p">
            Silakan mengganti Gambar
          </Text>
          <Button
            color="yellow"
            size="sm"
            radius={100}
            variant="filled"
            leftSection={<IconUpload size={16} />}
            mt="sm"
            onClick={() => onInputFile?.()}
          >
            Ganti Gambar
          </Button>
        </Stack>
      </Center>
    );
  }
  if (loading) {
    return (
      <Center mih={100} w="100%" py="md">
        <Loader type="dots" />
      </Center>
    );
  }

  return (
    <Center mih={100} w="100%">
      <Button
        color="yellow"
        size="md"
        radius={100}
        variant="filled"
        leftSection={<IconSparkles size={18} />}
        onClick={onGrade}
      >
        Jalankan Penilaian
      </Button>
    </Center>
  );
}
