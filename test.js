const fs = require('fs');
const path = require('path');
const assert = require('assert');

function loadTemplate(file) {
  const filePath = path.join(__dirname, '..', file);
  return fs.readFileSync(filePath, 'utf8');
}

try {
  const data = loadTemplate('index.html');
  assert.ok(data.includes('<!DOCTYPE html>'), 'index.html не содержит <!DOCTYPE html>');
  console.log('Template loaded successfully');
} catch (err) {
  console.error(err);
  process.exit(1);
}
