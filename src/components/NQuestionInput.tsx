import { ActionIcon, Group, NumberInput, Text } from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons-react';
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
      <Group ml="sm" gap={4}>
        <ActionIcon
          onClick={() => onChange(value - 1)}
          variant="subtle"
          size="lg"
        >
          <IconMinus size={18} />
        </ActionIcon>
        <NumberInput
          value={value}
          onChange={(v) => onChange(Number(v))}
          min={0}
          max={50}
          radius={6}
          size="sm"
          step={1}
          hideControls
          w={48}
          styles={{
            input: {
              textAlign: 'center',
            },
          }}
        />
        <ActionIcon
          onClick={() => onChange(value + 1)}
          variant="subtle"
          size="lg"
        >
          <IconPlus size={18} />
        </ActionIcon>
      </Group>
      {(value > 50 || value < 0) && (
        <Text fz="xs" c="red" ml="xs">
          Harus antara 1 sampai 50
        </Text>
      )}
    </Group>
  );
}
