module.exports = {
  "bail": true,
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**.{ts,tsx}",
  ],
  "coverageDirectory": "coverage",
  "coverageReporters": [
    "html",
    "json",
    "lcov",
    "text-summary",
  ],
  "notify": true,
  "testPathIgnorePatterns": [
    "/node_modules/",
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
  },
  "testRegex": "src/.*\\.test\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
};
