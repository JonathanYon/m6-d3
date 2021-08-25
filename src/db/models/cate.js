import sequelize from "../connect.js";
import s from "sequelize";

const { DataTypes } = s;

const cate = sequelize.define("cate", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default cate;
