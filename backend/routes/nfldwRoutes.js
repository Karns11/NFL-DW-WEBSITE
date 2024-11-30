import express from "express";
const router = express.Router();

import {
  getPlayerDim,
  getDateDim,
  getOfficialsDim,
  getPassTypeDim,
  getRunTypeDim,
  getStadiumDim,
  getPbpFact,
  getAllTables,
} from "../controllers/nfldwController.js";

router.route("/playerdim").get(getPlayerDim);
router.route("/datedim").get(getDateDim);
router.route("/officialsdim").get(getOfficialsDim);
router.route("/passtypedim").get(getPassTypeDim);
router.route("/runtypedim").get(getRunTypeDim);
router.route("/stadiumdim").get(getStadiumDim);
router.route("/pbpfact").get(getPbpFact);
router.route("/tables").get(getAllTables);

export default router;
