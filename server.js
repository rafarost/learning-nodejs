'use strict';

const express = require('express');
const PDFDocument = require('pdfkit')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/pdf', (req, res) => {
  var doc = new PDFDocument
  
  doc.end()
  
  doc.pipe(res);  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);