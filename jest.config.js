module.exports = {
  verbose: true,
  roots: ["<rootDir>/tests"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/index.tsx"],
  setupFiles: ["./tests/setup-envs.js"],
  setupFilesAfterEnv: ["./tests/setup.js"],
  testMatch: ["<rootDir>/tests/**/*.{spec,test}.{ts,tsx}"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^#/(.*)$": "<rootDir>/tests/$1",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};