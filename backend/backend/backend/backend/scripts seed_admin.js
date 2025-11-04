require('dotenv').config();
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'ChangeMeNow!';
  const hash = await bcrypt.hash(password, 12);
  await pool.query(
    `INSERT INTO users (username, password_hash, role, created_at) 
     VALUES ($1, $2, 'admin', NOW()) ON CONFLICT (username) DO NOTHING;`,
    [username, hash]
  );
  console.log('Admin user seeded:', username);
  await pool.end();
})();
