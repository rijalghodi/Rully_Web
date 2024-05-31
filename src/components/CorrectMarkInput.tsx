import { Flex, Group, Radio, Stack, Text } from '@mantine/core';
import React from 'react';

import { convertToGroupedArray } from './utils';
type Props = {
  onMarkChange: (mark: string, index: number) => void;
  correctMarks: string[];
  nQuestions: number;
};
export function CorrectMarkInput({
  correctMarks,
  onMarkChange,
  nQuestions,
}: Props) {
  return (
    <Flex rowGap="lg" columnGap="sm" wrap="wrap">
      {convertToGroupedArray(
        Array.from({ length: Number(nQuestions) }, (_, index) => index),
        Number(nQuestions) > 10 ? 10 : 5,
      ).map((stack, i) => (
        <Stack gap="sm" w={166} key={i}>
          {stack.map((item) => (
            <Group key={item} gap={10}>
              <Text w={24}>{item + 1}.</Text>
              <Radio.Group
                value={correctMarks[item]}
                onChange={(mark) => onMarkChange(mark, item)}
              >
                <Group gap={10}>
                  {['a', 'b', 'c', 'd'].map((mark) => (
                    <Radio
                      color="dark.3"
                      key={mark}
                      value={mark}
                      styles={{
                        label: {
                          paddingLeft: 4,
                        },
                        icon: {
                          display: 'none',
                        },
                        radio: {
                          cursor: 'pointer',
                        },
                      }}
                    />
                  ))}
                </Group>
              </Radio.Group>
            </Group>
          ))}
        </Stack>
      ))}
    </Flex>
  );
}
