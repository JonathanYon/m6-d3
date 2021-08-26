import { Router } from "express";
import db from "../../db/models/index.js";
import pkg from "sequelize";

const { Op } = pkg;
const categs = db.cate;
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
      //   const category = await prods.findAll(filter); //filter all product or the queries
      // const category = await categs.findAll();
      const category = await categs.findAll({
        attributes: ["id", "name"],
        ...filter,
        include: prods,
        //sends only name and image
      });

      //  const product = await prods.findAll({
      //     attributes: {exclude: ["id"] }         //sends only name and image
      // });
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
      const category = await categs.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(category[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const category = await categs.destroy({ where: { id: req.params.id } });
      if (category > 0) {
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
