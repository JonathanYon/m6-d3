import { Router } from "express";
import db from "../../db/models/index.js";

const categs = db.cate;
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const category = await categs.findAll();
      res.send(category);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const category = await categs.create(req.body);
      res.send(category);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const category = await categs.findByPk(req.params.id);
      res.send(category);
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
