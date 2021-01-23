const axios = require('axios');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const request = require('request');

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(async (res) => {
    // res.data holds the <html>

    const dom = new JSDOM(res.data);

    // filters all imagines and get array
    const images = dom.window.document.querySelectorAll('img');

    for (let i = 0; i < 10; i++) {
      const fileSource = images[i].getAttribute('src');
      console.log(fileSource);

      // brings the images in .jpg and add names
      request(`${fileSource}`).pipe(
        fs.createWriteStream(`${__dirname}/images/img_${i + 1}.jpg`),
      );
    }
  });
