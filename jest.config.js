module.exports = {
  testEnvironment: "jsdom",
  rootDir: "./",
  modulePathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(scss|sass|css|jpg|jpeg|png|gif|webp|svg)$":
      "<rootDir>/tests/styleMock.js",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFiles: ["./tests/environment.js"],
  setupFilesAfterEnv: ["./tests/setup.jsx"],
  collectCoverageFrom: ["components/**/*.{js,jsx}", "pages/**/*.{js,jsx}"],
  coverageReporters: ["lcov", "text", "text-summary"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
