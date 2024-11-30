import asyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv";
import { BigQuery } from "@google-cloud/bigquery";
dotenv.config();

const bigquery = new BigQuery({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: process.env.GCP_PROJECT_ID,
});

// @desc   GET Player dim table
//route    GET /api/nfldw/playerdim
//@access  Public
const getPlayerDim = asyncHandler(async (req, res) => {
  try {
    const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.PLAYER_DIM_TABLE}\` `;
    const [rows] = await bigquery.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("BigQuery Error:", error);
    res.status(500).send("Error fetching data from BigQuery");
  }
});

// @desc   GET Date dim table
//route    GET /api/nfldw/datedim
//@access  Public
const getDateDim = asyncHandler(async (req, res) => {
  try {
    const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.DATE_DIM_TABLE}\` `;
    const [rows] = await bigquery.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("BigQuery Error:", error);
    res.status(500).send("Error fetching data from BigQuery");
  }
});

// @desc   GET Officials dim table
//route    GET /api/nfldw/officialsdim
//@access  Public
const getOfficialsDim = asyncHandler(async (req, res) => {
  try {
    const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.OFFICIALS_DIM_TABLE}\` `;
    const [rows] = await bigquery.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("BigQuery Error:", error);
    res.status(500).send("Error fetching data from BigQuery");
  }
});

// @desc   GET pass_type dim table
//route    GET /api/nfldw/passtypedim
//@access  Public
const getPassTypeDim = asyncHandler(async (req, res) => {
  try {
    const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.PASSTYPE_DIM_TABLE}\` `;
    const [rows] = await bigquery.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("BigQuery Error:", error);
    res.status(500).send("Error fetching data from BigQuery");
  }
});

// @desc   GET run_type dim table
//route    GET /api/nfldw/runtypedim
//@access  Public
const getRunTypeDim = asyncHandler(async (req, res) => {
  try {
    const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.RUNTYPE_DIM_TABLE}\` `;
    const [rows] = await bigquery.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("BigQuery Error:", error);
    res.status(500).send("Error fetching data from BigQuery");
  }
});

// @desc   GET stadium dim table
//route    GET /api/nfldw/stadiumdim
//@access  Public
const getStadiumDim = asyncHandler(async (req, res) => {
  try {
    const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.STADIUM_DIM_TABLE}\` `;
    const [rows] = await bigquery.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error("BigQuery Error:", error);
    res.status(500).send("Error fetching data from BigQuery");
  }
});

// @desc   GET pbp_yds fact table
//route    GET /api/nfldw/pbpfact
//@access  Public
const getPbpFact = asyncHandler(async (req, res) => {
  if (process.env.ENVIRONMENT == "development") {
    try {
      const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.PBP_FACT_TABLE}\` LIMIT 1000 `;
      const [rows] = await bigquery.query(query);
      res.status(200).json(rows);
    } catch (error) {
      console.error("BigQuery Error:", error);
      res.status(500).send("Error fetching data from BigQuery");
    }
  } else {
    try {
      const query = `SELECT * FROM \`${process.env.GCP_PROJECT_ID}.${process.env.DATASET}.${process.env.PBP_FACT_TABLE}\` `;
      const [rows] = await bigquery.query(query);
      res.status(200).json(rows);
    } catch (error) {
      console.error("BigQuery Error:", error);
      res.status(500).send("Error fetching data from BigQuery");
    }
  }
});

// @desc   GET all tables in dataset
//route    GET /api/nfldw/tables
//@access  Public
const getAllTables = asyncHandler(async (req, res) => {
  try {
    const dataset = bigquery.dataset(process.env.DATASET); // Access the dataset
    const [tables] = await dataset.getTables(); // Fetch tables

    // Map table metadata to a simple array of table names
    const tableNames = tables.map((table) => table.id);

    res.status(200).json({ tables: tableNames });
  } catch (error) {
    console.error("Error fetching tables from BigQuery:", error);
    res.status(500).send("Error fetching tables from BigQuery");
  }
});

export {
  getPlayerDim,
  getDateDim,
  getOfficialsDim,
  getPassTypeDim,
  getRunTypeDim,
  getStadiumDim,
  getPbpFact,
  getAllTables,
};
