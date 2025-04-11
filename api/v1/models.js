const db = mysql.createConnection({
  host: process.env.DB_HOST, // Contoh: "us-east-1.psdb.cloud" (jika pakai PlanetScale)
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: { rejectUnauthorized: true } // Wajib untuk koneksi aman
});

// Tambahkan event listener untuk error setelah koneksi
db.on('error', (err) => {
  console.error('Database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    // Reconnect logic bisa ditambahkan di sini
  }
});