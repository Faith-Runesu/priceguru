module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      // Handle module aliases
      '^@/(.*)$': '<rootDir>/$1',
      // Mock static file imports (images, CSS, etc.)
      '\\.(css|less|scss|sass|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
      // Use babel-jest to transpile tests
      '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
  };