import { Accordion, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import React, { useEffect, useState } from 'react';

import { apiClient } from '@/service/api-client';

import { CorrectMarkInput } from './CorrectMarkInput';
import { GradeTaskResult } from './GradeTaskResult';
import { NQuestioInput } from './NQuestionInput';
type Props = {
  file: File | null;
  onInputFile?: () => void;
};

type GradeSheetResponse = {
  marks: string[];
  score: number | null;
};
export function GradeTask({ file, onInputFile }: Props) {
  const [detectedMarks, setDetectedMarks] = useState<string[] | null>(null);
  const [correctMarks, setCorrectMarks] = useState<string[]>([]);
  const [nQuestions, setNQuestions] = useState(5);
  const [debNQuestion, setDebNQuestion] = useState<number>(5);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (Number(nQuestions) > 50 || Number(nQuestions) < 0) {
        return;
      }
      setDebNQuestion(nQuestions);
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [nQuestions]);
  const [loading, setLoading] = useState(false);

  const handleGradeSheet = async () => {
    setLoading(true);
    if (!file) {
      notifications.show({
        title: 'Gagal Melakukan Penilaian',
        message: 'Pilih file terlebih dahulu',
        type: 'error',
        color: 'orange',
      });
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('correct_marks', JSON.stringify(correctMarks));

    const res = await apiClient.post<GradeSheetResponse>(
      '/bubble/grade-sheet',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const marks = res.data.marks;
    const score = res.data.score;
    setDetectedMarks(marks);
    setScore(score ?? 0);
    setLoading(false);
  };

  useEffect(() => {
    setDetectedMarks(null);
  }, [file]);

  return (
    <Stack w="100%" gap="lg">
      <Stack w="100%" gap="sm" align="flex-start">
        <Accordion w="100%" variant="separated" radius="md" defaultValue="1">
          <Accordion.Item value="1">
            <Accordion.Control>
              Kunci Jawaban{' '}
              <Text span fz="xs">
                (Wajib Diisi)
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <NQuestioInput value={nQuestions} onChange={setNQuestions} />
                <CorrectMarkInput
                  correctMarks={correctMarks ?? []}
                  onMarkChange={(mark, index) => {
                    const newCorrectMarks = [...correctMarks];
                    newCorrectMarks[index] = mark;
                    setCorrectMarks(newCorrectMarks);
                  }}
                  nQuestions={debNQuestion}
                />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
      <GradeTaskResult
        detectedMarks={detectedMarks}
        correctMarks={correctMarks}
        loading={loading}
        onGrade={handleGradeSheet}
        onInputFile={onInputFile}
        score={score}
      />
    </Stack>
  );
}
