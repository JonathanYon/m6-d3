import { Router } from "express";
import pkg from "sequelize";
import db from "../../db/models/index.js";

const { Op } = pkg;
const comment = db.comment;
const User = db.user;
const router = Router();

router
  .route("/:userId")
  .get(async (req, res, next) => {
    try {
      const product = await comment.findAll({});
      res.send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      //   const { userId } = req.params;
      const product = await comment.destroy({
        where: { userId: req.params.userId },
      });
      res.send({ product });
      //   if (product > 0) {
      //     res.send("Deleted!!");
      //   } else {
      //     res.status(404).send("Not Found!!");
      //   }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.route("/").post(async (req, res, next) => {
  try {
    const product = await comment.create({ ...req.body });
    res.send(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
