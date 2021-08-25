import { Router } from "express";
import pkg from "sequelize";
import db from "../../db/models/index.js";
import prod from "../../db/models/prod.js";

const { Op } = pkg;
const prods = db.prod;
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const { name } = req.query;
      const filter = req.query.name
        ? {
            where: {
              name: {
                [Op.iLike]: `${name}%`,
              },
            },
          }
        : {};
      const product = await prods.findAll(filter);
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
      const product = await prods.findByPk(req.params.id);
      res.send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const product = await prods.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(product[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const product = await prods.destroy({ where: { id: req.params.id } });
      if (product > 0) {
        res.send("Deleted!!");
      } else {
        res.status(404).send("Not Found!!");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
