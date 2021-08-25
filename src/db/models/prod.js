import sequelize from "../connect";
import s from "sequelize";

const { DataTypes } = s;

const prod = sequelize.define("prod", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default prod;
