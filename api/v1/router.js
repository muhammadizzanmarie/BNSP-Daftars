const express = require("express");
const {
  getAllPendaftar,
  getPendaftarById,
  createPendaftar,
  updatePendaftar,
  deletePendaftar
} = require("./controller.js");

const router = express.Router();

router.get("/pendaftar", getAllPendaftar);
router.get("/pendaftar/:id", getPendaftarById); 
router.post("/pendaftar", createPendaftar);
router.put("/pendaftar/:id", updatePendaftar);
router.delete("/pendaftar/:id", deletePendaftar);

module.exports = router;
