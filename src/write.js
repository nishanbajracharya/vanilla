const fs = require('fs');

const template = require('./template');

function write(props, success, error) {
  const html = template.html({
    title: props.htmlTitle,
    body: props.htmlBody
  });

  const css = template.css({
    body: props.cssBody
  });

  const js = template.js({
    body: props.jsBody
  });

  const output = props.output;

  try {
    // Write HTML
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output);
    }
    fs.writeFileSync(output + '/index.html', html);

    // Write Editorconfig
    fs.writeFileSync(output + '/.editorconfig', template.source.EDITOR_CONFIG);

    // Write CSS
    if (!fs.existsSync(output + '/css')) {
      fs.mkdirSync(output + '/css');
    }
    fs.writeFileSync(output + '/css/style.css', css);
    fs.writeFileSync(output + '/css/reset.css', template.source.RESET);

    // Write JS
    if (!fs.existsSync(output + '/js')) {
      fs.mkdirSync(output + '/js');
    }
    fs.writeFileSync(output + '/js/script.js', js);

    success && success();
  } catch (err) {
    error && error(err);
  }
}

module.exports = write;
