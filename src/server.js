import express from "express";
import cors from "cors";
import prodRouter from "./service/prods/routes.js";
import categRouter from "./service/categs/routes.js";
import commentRouter from "./service/comment/routes.js";
import userRouter from "./service/user/routes.js";
// import db from "./db/connect.js";
import db from "./db/models/index.js";

const server = express();
const port = process.env.PORT || 3005;

server.use(express.json());
server.use(cors());

server.use("/prods", prodRouter);
server.use("/categs", categRouter);
server.use("/comments", commentRouter);
server.use("/users", userRouter);

db.sequelize
  .sync({ force: false }) //was sync({ force: true })
  .then(() => {
    server.listen(port, () => console.log("🛒 Port runing on: ", port));
  })
  .catch((e) => console.log(e));
