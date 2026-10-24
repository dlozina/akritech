module.exports = {
  '*.{js,jsx,ts,tsx,mjs}': [
    'prettier --write',
    'eslint --max-warnings=0 --no-warn-ignored',
  ],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.{json,css,md,yml}': ['prettier --write'],
};
