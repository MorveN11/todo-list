import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/', '/.angular/'],
  collectCoverageFrom: ['src/app/**/*.ts', '!src/app/**/*.dto.ts', '!src/app/**/*.entity.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/src/main.ts', '<rootDir>/src/app/utils/constants.ts'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/app/$1',
  },
  rootDir: '.',
};

export default config;
