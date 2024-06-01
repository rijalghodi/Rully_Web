import {
  Badge,
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

  if (loading) {
    return (
      <Center mih={100} w="100%" py="md">
        <Loader type="dots" />
      </Center>
    );
  }

  if (detectedMarks && detectedMarks.length > 0) {
    return (
      <Stack gap="xs" w="100%">
        <Group justify="space-between">
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
        <Text fz={34} fw={700} ta="center">
          Skor : {score}
        </Text>
        <Flex rowGap="md" columnGap="xs" wrap="wrap">
          {convertToGroupedArray(wiseMarks, wiseMarks.length > 10 ? 10 : 5).map(
            (stack, i) => (
              <Stack gap={8} w={184} key={i}>
                {stack.map((item, j) => (
                  <Group gap={4} key={j} pos="relative">
                    <Text span w={24}>
                      {i * (wiseMarks.length > 10 ? 10 : 5) + j + 1}.
                    </Text>

                    <Text
                      span
                      c={item.isCorrect ? 'green' : 'red.7'}
                      tt="uppercase"
                      fw={500}
                    >
                      {item.detectedMark ?? 'NO ANSWER'}
                    </Text>
                    {!item.isCorrect && (
                      <Text span c="yellow.7" tt="uppercase">
                        ({item.correctMark})
                      </Text>
                    )}
                  </Group>
                ))}
              </Stack>
            ),
          )}
        </Flex>
        <Group justify="center" gap="xs" py="xs">
          <Badge variant="dot" color="green" tt="capitalize" fw={400}>
            Jawaban Siswa Benar
          </Badge>
          <Badge variant="dot" color="red.7" tt="capitalize" fw={400}>
            Jawaban Siswa Salah
          </Badge>
          <Badge variant="dot" color="yellow.7" tt="capitalize" fw={400}>
            Kunci Jawaban
          </Badge>
        </Group>
      </Stack>
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
            Silakan mengganti Gambar atau ulangi penilaian
          </Text>
          <Group mt="sm" gap="xs" justify="center">
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
              onClick={onGrade}
              loading={loading}
              loaderProps={{ type: 'dots' }}
            >
              Ulang Penilaian
            </Button>
          </Group>
        </Stack>
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
