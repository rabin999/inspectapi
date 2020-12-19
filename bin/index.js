#!/usr/bin/env node
const { spawn } = require('child_process');
const ls = spawn('npx', ['serve', '-s',  'build', '-l', '4700']);

ls.stdout.on('data', (data) => {
  console.log(data.toString());
});

ls.stderr.on('data', (data) => {
  console.error(data);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});