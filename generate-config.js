const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const { SUPABASE_URL = '', SUPABASE_ANON_KEY = '' } = process.env;

const content = [
  `window.SUPABASE_URL = ${JSON.stringify(SUPABASE_URL)};`,
  `window.SUPABASE_ANON_KEY = ${JSON.stringify(SUPABASE_ANON_KEY)};`,
  ''
].join('\n');

fs.writeFileSync('config.js', content);
console.log('config.js generated');
