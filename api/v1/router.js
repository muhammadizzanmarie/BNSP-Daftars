import express from "express";
import {
  getAllPendaftar,
  getPendaftarById,
  createPendaftar,
  updatePendaftar,
  deletePendaftar
} from "./controller.js";

const router = express.Router();

router.get("/pendaftar", getAllPendaftar);
router.get("/pendaftar/:id", getPendaftarById); 
router.post("/pendaftar", createPendaftar);
router.put("/pendaftar/:id", updatePendaftar);
router.delete("/pendaftar/:id", deletePendaftar);

export default router;
