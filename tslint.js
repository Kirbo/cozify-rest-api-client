// https://palantir.github.io/tslint/rules/

module.exports = {
  "defaultSeverity": "error",
  "extends": [
      "tslint:recommended",
  ],
  "rules": {
    "max-line-length": {
      "options": [
        150,
      ],
    },
    "new-parens": true,
    "no-arg": true,
    "no-bitwise": true,
    "object-literal-sort-keys": false,
    "ordered-imports": false,
    "quotemark": [
      true,
      "single",
      "avoid-escape",
    ],
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": false,
    "no-console": {
      "severity": "error",
      "options": [
        "debug",
        "log",
        "trace",
      ],
    },
  },
  "jsRules": {
    "max-line-length": {
      "options": [
        120,
      ],
    },
  },
};
