const fs = require('fs');

const template = require('./template');

function write(props) {
  const html = template.html({
    title: props.htmlTitle,
    body: props.htmlBody,
  });

  const css = template.css({
    body: props.cssBody,
  });

  const js = template.js({
    body: props.jsBody,
  });

  console.log(html, css, js);
}

module.exports = write;
