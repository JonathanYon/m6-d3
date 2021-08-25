import cate from "./cate.js";
import prod from "./prod.js";
import sequelize from "../connect.js";

prod.belongsTo(cate);
cate.hasMany(prod);

export default { cate, prod, sequelize };
