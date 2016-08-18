'use strict';

const execFile = require('child_process').execFile;

const windows = process.platform === 'win32';
const macOS = process.platform === 'darwin';

module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	const url = 'https://npms.io/search?term=' + input;

	// default to the linux command
	let command = 'xdg-open';

	if (windows) {
		command = 'start';
	}

	if (macOS) {
		command = 'open';
	}

	execFile(command, [url], error => {
		if (error) {
			throw error;
		}
		console.log(command, url, '\n');
	});
};
