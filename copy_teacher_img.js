const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'posts', 'teacher_img');
const dest = path.join(__dirname, 'public', 'teacher_img');

fs.cpSync(src, dest, {recursive: true});
