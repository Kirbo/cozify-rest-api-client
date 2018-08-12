module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'html',
  ],
  notify: true,
  testMatch: [
    '**/src/**.test.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
};
