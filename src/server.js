import express from "express";
import cors from "cors";

const server = express();
const port = process.env.PORT || 3003;

server.use(express.json());
server.use(cors());

server.listen(port, () => {
  console.log("🛒 Port runing on: ", port);
});
