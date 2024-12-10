function escapeBracket(filepath) {
	return filepath.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

export default {
	'*.{js,ts,tsx}': (filenames) => [
		`turbo lint -- ${filenames.map(escapeBracket).join(' ')}`
	]
};