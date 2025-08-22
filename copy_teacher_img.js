import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, 'src', 'posts', 'teacher_img');
const dest = path.join(__dirname, 'public', 'teacher_img');

fs.cpSync(src, dest, { recursive: true });
