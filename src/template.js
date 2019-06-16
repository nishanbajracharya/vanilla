const handlebars = require('handlebars');

const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  {{body}}
  <script src="js/script.js"></script>
</body>
</html>
`;

const CSS = `
/* Base CSS File */
{{body}}
`;

const JS = `
// Base JS File
{{body}}
`;

const html = handlebars.compile(HTML);
const css = handlebars.compile(CSS);
const js = handlebars.compile(JS);

module.exports = {
  source: {
    HTML,
    CSS,
    JS
  },
  html,
  css,
  js
};
