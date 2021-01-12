module.exports = {
  "verbose": true,
  "roots": [
    "<rootDir>"
  ],
  "testMatch": [
    "<rootDir>/__tests__/*.+(ts|tsx|js)",
    "/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testPathIgnorePatterns": [
    "/node_modules/"
  ]
}