// jest.config.js
import nextJest from 'next/jest'; 

const createJestConfig = nextJest({
  dir: './', 
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', 
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default createJestConfig(customJestConfig); // Export corrigido