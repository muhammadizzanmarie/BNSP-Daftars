import db from "./models.js";

// GET semua pendaftar
export const getAllPendaftar = (req, res) => {
  db.query("SELECT * FROM tabel_pendaftar", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// ✅ GET pendaftar by ID
export const getPendaftarById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM tabel_pendaftar WHERE id_pendaftar = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ message: "Pendaftar tidak ditemukan" });
    res.json(result[0]); // kirim satu object
  });
};

// CREATE pendaftar
export const createPendaftar = (req, res) => {
  const data = req.body;
  const sql = `
    INSERT INTO tabel_pendaftar 
    (nm_pendaftar, alamat, jenis_kelamin, no_hp, asal_sekolah, jurusan, tgl_lahir, nisn) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.nm_pendaftar,
    data.alamat,
    data.jenis_kelamin,
    data.no_hp,
    data.asal_sekolah,
    data.jurusan,
    data.tgl_lahir,
    data.nisn
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Pendaftar berhasil ditambahkan!" });
  });
};

// UPDATE pendaftar
export const updatePendaftar = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const sql = `
    UPDATE tabel_pendaftar SET 
    nm_pendaftar=?, alamat=?, jenis_kelamin=?, no_hp=?, asal_sekolah=?, jurusan=?, tgl_lahir=?, nisn=? 
    WHERE id_pendaftar=?
  `;
  const values = [
    data.nm_pendaftar,
    data.alamat,
    data.jenis_kelamin,
    data.no_hp,
    data.asal_sekolah,
    data.jurusan,
    data.tgl_lahir,
    data.nisn,
    id
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Pendaftar berhasil diupdate!" });
  });
};

// DELETE pendaftar
export const deletePendaftar = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tabel_pendaftar WHERE id_pendaftar = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Pendaftar berhasil dihapus!" });
  });
};
