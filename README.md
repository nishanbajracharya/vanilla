# Vanilla

A vanilla Javascript project boilerplate generator.

## Installation

### Install from NPM

```sh
$ npm i -g vanilla-cli
```

### Clone this repository

```sh
$ git clone git@github.com:nishanbajracharya/vanilla.git
```

In order to use the tool as a global command, link the package.

```sh
$ npm link
```

**Note:** This will create a cli command named `vanilla` which can be used globally. If `npm link` is not run, the `vanilla` command will have to be replaced with `node build/vanilla.js`.

## Usage

Vanilla is a `cli` tool and can be used in the following ways:

### Minimal usage

```
$ vanilla
```

This will create a new boilerplate with the default folder name, `vanilla`, in the current working directory.

### Specifying project name

```
$ vanilla --project=projectName
OR
$ vanilla projectName
```

This will create the boilerplate in `projectName` folder in current working directory.

### Specifying output directory

```
$ vanilla --output=/home/user/projectName
```

This will create the boilerplate in the path specified. Here specifying `--project` argument will be ignored. The path should be absolute.

### All cli arguments

| Name        | Description                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| `output`    | Path where the boilerplate is to be created                                    |
| `project`   | Name of folder in the current directory where the boilerplate is to be created |
| `htmlTitle` | Title of html document                                                         |
| `htmlBody`  | Body of html document                                                          |
| `cssBody`   | Body of css document                                                           |
| `jsBody`    | Body of js document                                                            |

### Usage with `npm start`

The package has a start script, which requires an extra step to use with cli arguments. The script can be used in the following way:

```sh
$ npm start -- --project=projectName
```

**Note:** The additional `--` argument is required when using npm scripts.
