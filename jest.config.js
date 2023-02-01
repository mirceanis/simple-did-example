/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  verbose: true,
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.mts'],
  transform: {
    '^.+\\.(t)s$': ['ts-jest', { useESM: true }],
    '^.+\\.(j)s$': 'babel-jest',
  },
  resolver: 'ts-jest-resolver',
};
