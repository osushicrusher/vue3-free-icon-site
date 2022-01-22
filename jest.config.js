module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    // babel-jest で js を処理する
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!variables/.*)"
  ],
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  // ソースコードにある @ を src へと割当てる
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  // "collectCoverage": true,
  // "collectCoverageFrom": ["**/*.{js,vue,ts}", "!**/node_modules/**"],
  // "coverageReporters": ["html", "text-summary"],
  "testURL": "http://localhost/",
}