import cate from "./cate.js";
import prod from "./prod.js";
import comment from "./comment.js";
import user from "./user.js";
import sequelize from "../connect.js";

prod.belongsTo(cate);
cate.hasMany(prod);

comment.belongsTo(user);
user.hasMany(comment);

export default { cate, prod, comment, user, sequelize };
