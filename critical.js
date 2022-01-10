const critical = require("critical");

const srcHTML = './index.html'
const dimensions = [
  {
    height: 500,
    width: 300,
  },
  {
    height: 720,
    width: 1280,
  },
];

const penthouse = {
  timeout: 60000,
};

critical.generate({
  // Inline the generated critical-path CSS
  // - true generates HTML
  // - false generates CSS
  inline: true,

  // Your base directory
  base: './',

  // HTML source file
  src: srcHTML,

  dimensions,

  // Output results to file
  target: {
    css: './css/critical.css',
    html: './index-critical.html',
    uncritical: './css/uncritical.css',
  },

  // Extract inlined styles from referenced stylesheets
  extract: true,

  penthouse,
}, (err, output) => {
  if (err) {
    console.error(err);
  } else if (output) {
    console.log('Generated critical CSS');
  }
});