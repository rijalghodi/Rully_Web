import { MantineProviderProps } from '@mantine/core';

export const theme: MantineProviderProps['theme'] = {
  spacing: {
    xs: '0.75rem', // 12px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '2.5rem', // 40px
  },
  radius: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.25rem', // 20px
  },

  defaultRadius: 'sm',

  breakpoints: {
    xxs: '397px',
    xs: '36em', // 576px
    sm: '48em', // 768px
    md: '62em', // 992px
    lg: '75em', // 1200px
    xl: '88em', // 1408px
  },

  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
  },

  headings: {
    fontWeight: '600',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: '2.125rem' }, // 34px
      h2: { fontSize: '1.625rem' }, // 26px
      h3: { fontSize: '1.375rem' }, // 22px
      h4: { fontSize: '1.125rem' }, // 18px
      h5: { fontSize: '1rem' }, // 16px
      h6: { fontSize: '0.875rem' }, // 14px
    },
  },
  colors: {
    brand: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#20C997',
      '#12B886',
      '#0CA678',
      '#099268',
      '#087F5B',
    ],
  },
  primaryColor: 'yellow',
  primaryShade: 6,
  black: '#3b3b3b',
  white: '#fff',
};
