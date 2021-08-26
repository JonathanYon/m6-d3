import sequelize from "../connect.js";
import dt from "sequelize";

const { DataTypes } = dt;
const comment = sequelize.define("comment", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
export default comment;
