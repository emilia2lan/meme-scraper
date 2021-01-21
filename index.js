// brings back plain text or html

const fetch = require('node-fetch');

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (res) {
    return res.text();
  })
  .then(function (body) {
    console.log(body);
  });
