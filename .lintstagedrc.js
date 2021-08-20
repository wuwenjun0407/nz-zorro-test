module.exports = {
    'src/**/*{js,jsx,ts,tsx,md,html}': ['npm run lint:ts', 'pretty-quick --staged'],
    'src/**/*.less': ['npm run lint:style', 'git add']
};
