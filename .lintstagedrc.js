module.exports = {
    'src/**/*{js,jsx,ts,tsx,md,html}': ['prettier --write', 'npm run lint:ts'],
    'src/**/*.less': ['npm run lint:style', 'git add']
};
