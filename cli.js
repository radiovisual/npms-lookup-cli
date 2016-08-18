#!/usr/bin/env node
'use strict';
const meow = require('meow');
const npmLookupCli = require('./');

const cli = meow(`
	Usage
	  $ npmjs [input]

	Example
	  $ npmjs object-assign
`);

npmLookupCli(cli.input[0]);
