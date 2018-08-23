module.exports = {
  '**/*.{ts,tsx,scss}': [
    'prettier --tab-width 2 --write',
    'git add'
  ],
  '**/*.{ts,tsx}': 'npm run lint-staged:js',
  '**/*.scss': 'npm run lint-staged:style'
};