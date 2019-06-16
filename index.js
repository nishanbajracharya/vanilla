const argv = require('yargs').argv;
const path = require('path');

const write = require('./src/write');

const ARGUMENT_PROPS = [
  'output',
  'jsBody',
  'cssBody',
  'project',
  'htmlBody',
  'htmlTitle',
];

const DEFAULT_ARGUMENTS = {
  jsBody: '',
  output: '',
  cssBody: '',
  project: 'vanilla',
  htmlTitle: 'Document',
  htmlBody: '<p>Vanilla Boilerplate</p>',
};

function parseArguments(args = argv, requiredArguments = ARGUMENT_PROPS, defaultArguments = DEFAULT_ARGUMENTS) {
  const parsedArguments = {};

  for (let i = 0; i < requiredArguments.length; i++) {
    const prop = requiredArguments[i];
    parsedArguments[prop] = args[prop] || defaultArguments[prop];
  }

  if (!parsedArguments.output) {
    parsedArguments.output = process.cwd() + '/' + parsedArguments.project
  }

  parsedArguments.output = path.resolve(parsedArguments.output);

  return parsedArguments;
}

const args = parseArguments();

write(args);
