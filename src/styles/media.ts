import keysOf from 'utils/keyOf';

const sizes = {
  mobile: 689.98,
  tablet: 891.98,
  laptop: 1199.98,
  desktop: 1439.98,
} as const;

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`;

/* eslint-disable import/prefer-default-export */
export const from = keysOf(sizes).reduce(
  (acc, key) => ({
    ...acc,
    [key]: minWidthQuery(sizes[key]),
  }),
  {} as { [key in keyof typeof sizes]: string }
);
