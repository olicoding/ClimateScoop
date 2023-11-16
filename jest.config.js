module.exports = {
  testEnvironment: "jsdom",
  rootDir: "./",
  modulePathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "<rootDir>/tests/styleMock.js",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFiles: ["./tests/environment.js"],
  setupFilesAfterEnv: ["./tests/setup.js"],
  collectCoverageFrom: ["components/**/*.{js,jsx}", "pages/**/*.{js,jsx}"],
  coverageReporters: ["lcov", "text", "text-summary"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
