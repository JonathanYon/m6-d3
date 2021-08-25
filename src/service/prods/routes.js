import { Router } from "express";
import db from "../../db/models/index.js";
import prod from "../../db/models/prod.js";

const prods = db.prod;
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const product = await prods.findAll();
      res.send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const product = await prods.create(req.body);
      res.send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
