import { Group, NumberInput, Text } from '@mantine/core';
import React from 'react';
type Props = {
  value: number;
  onChange: (value: number) => void;
};
export function NQuestioInput({ value, onChange }: Props) {
  return (
    <Group align="center" gap={0}>
      <Text fz="sm" fw={500}>
        Jumlah Soal
      </Text>
      <NumberInput
        value={value}
        onChange={(v) => onChange(Number(v))}
        min={0}
        max={50}
        radius={6}
        size="sm"
        step={1}
        hideControls
        w={50}
        styles={{
          input: {
            textAlign: 'center',
          },
        }}
        ml="sm"
      />
      {(value > 50 || value < 0) && (
        <Text fz="xs" c="red" ml="xs">
          Harus antara 1 sampai 50
        </Text>
      )}
    </Group>
  );
}
