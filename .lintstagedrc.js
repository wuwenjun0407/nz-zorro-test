module.exports = {
    "src/**/\*{js,jsx,ts,tsx,md,html}": ["npm run lint:ts", "prettier --write"],
    "src/**/*.less": ["npm run lint:style", "git add"],
}
