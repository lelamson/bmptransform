'use strict';

var fs = require('fs');

function readBmp (filename) {
  var file = fs.readFileSync(filename);
  var bmpFile = {};


  // header is 14 bytes long
  bmpFile.header = file.readUInt16BE(0).toString(16);
  bmpFile.fileSize = file.readUInt32LE(2);
  bmpFile.width = file.readUInt32LE(18);
  bmpFile.height = file.readUInt32LE(22);
  bmpFile.bpp = file.readUInt32LE(28);
  var startOfcp = 54;
  console.log("test: "  + file.readUInt32LE(54 + 4*28).toString(16));
  console.log("test: "  + file.readUInt32LE(54 + 4*15).toString(16));

  console.log("bpp: " + bmpFile.bpp);

  var pixelStart = +file.readUInt32LE(10);

  console.log("pixelStart : " + pixelStart);
  console.log("fileLength: " + file.length);
  console.log("width: " + bmpFile.width);
  console.log("height: " + bmpFile.height);

  console.log('pixstart: ' + pixelStart);
  console.log('colorIndex: ' + bmpFile.px1);

  // bmpFile.colorTable = [];
  // for(var i = pixelStart; i <= file.length; i++) {
  //   bmpFile.colorTable.push(255 -file.readUInt8(i));
  // }


  return bmpFile;
}

function readBmp24 (filename) {
  var file = fs.readFileSync(filename);
  var bmpFile = {};

  // header is 14 bytes long
  bmpFile.header = file.readUInt16BE(0).toString(16);
  bmpFile.fileSize = file.readUInt32LE(2);
  bmpFile.width = file.readUInt32LE(18);
  bmpFile.height = file.readUInt32LE(22);
  bmpFile.bpp = file.readUInt32LE(28);

  var pixelStart = +file.readUInt32LE(10);

  console.log("bpp: " + bmpFile.bpp);
  console.log("pixelStart : " + pixelStart);
  console.log("fileLength: " + file.length);
  console.log("width: " + bmpFile.width);
  console.log("height: " + bmpFile.height);

  var pixels = [];
  for(var i = 0; i < 50; i++) {
    pixels[i] = file.readUInt8(54+i*3);
  }
  console.log(pixels);
  return bmpFile;
}

function processBmp (fileObject) {
  // body...
}


module.exports = {
  readBmp: readBmp,
  readBmp24: readBmp24
};
