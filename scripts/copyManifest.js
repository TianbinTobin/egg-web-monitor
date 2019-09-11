'use strict';

const fs = require('fs');
const path = require('path');

fs.copyFile(
  path.resolve(__dirname, '../app/public/manifest.json'),
  path.resolve(__dirname, '../config/manifest.json'),
  err => {
    if (err) throw err;
    console.log(
      `copy ${path.resolve(__dirname, '../app/public/manifest.json')} to ${path.resolve(
        __dirname,
        '../config/manifest.json',
      )} success`,
    );
  },
);
