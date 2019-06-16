const argv = require('yargs').argv;
const path = require('path');

const ARGUMENT_PROPS = [
  'output',
  'jsBody',
  'cssBody',
  'htmlBody',
  'htmlTitle',
];

const DEFAULT_ARGUMENTS = {
  jsBody: '',
  cssBody: '',
  htmlTitle: 'Document',
  'output': process.cwd() + '/vanilla',
  htmlBody: '<p>Vanilla Boilerplate</p>',
};

function parseArguments(args = argv, requiredArguments = ARGUMENT_PROPS, defaultArguments = DEFAULT_ARGUMENTS) {
  const parsedArguments = {};

  for (let i = 0; i < requiredArguments.length; i++) {
    const prop = requiredArguments[i];
    parsedArguments[prop] = args[prop] || defaultArguments[prop];
  }

  parsedArguments.output = path.resolve(parsedArguments.output);

  return parsedArguments;
}

const args = parseArguments();
