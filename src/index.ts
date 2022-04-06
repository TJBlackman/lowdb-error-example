import { join, dirname } from "path";
import {fileURLToPath} from 'url';

import { Low, JSONFile } from "lowdb";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
console.log('directory-name 👉️', __dirname);

// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

console.log(db)