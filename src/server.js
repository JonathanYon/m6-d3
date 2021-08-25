import express from "express";
import cors from "cors";
// import db from "./db/connect.js";
import db from "./db/models/index.js";

const server = express();
const port = process.env.PORT || 3005;

server.use(express.json());
server.use(cors());

db.sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(port, () => console.log("🛒 Port runing on: ", port));
  })
  .catch((e) => console.log(e));
