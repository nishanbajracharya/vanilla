const path = require('path');
const chalk = require('chalk');
const argv = require('yargs').argv;

const write = require('./write');

const ARGUMENT_PROPS = [
  'output',
  'jsBody',
  'cssBody',
  'project',
  'htmlBody',
  'htmlTitle'
];

const DEFAULT_ARGUMENTS = {
  jsBody: '',
  output: '',
  cssBody: '',
  project: 'vanilla',
  htmlTitle: 'Document',
  htmlBody: '<p>Vanilla Boilerplate</p>'
};

function parseArguments(
  args = argv,
  requiredArguments = ARGUMENT_PROPS,
  defaultArguments = DEFAULT_ARGUMENTS
) {
  const parsedArguments = {};

  for (let i = 0; i < requiredArguments.length; i++) {
    const prop = requiredArguments[i];
    if (prop === 'project') {
      parsedArguments[prop] = args[prop] || argv._[0] || defaultArguments[prop];

      continue;
    }

    parsedArguments[prop] = args[prop] || defaultArguments[prop];
  }

  if (!parsedArguments.output) {
    parsedArguments.output = process.cwd() + '/' + parsedArguments.project;
  }

  parsedArguments.output = path.resolve(parsedArguments.output);

  return parsedArguments;
}

const args = parseArguments();

write(
  args,
  function success() {
    console.log(chalk.green('Successfully created project!'));
    console.log(args.output);
  },
  function error(err) {
    console.log(chalk.red(`Couldn't create project.`));
    console.log(err.message);
  }
);
