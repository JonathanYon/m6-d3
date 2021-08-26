import cate from "./cate.js";
import prod from "./prod.js";
import comment from "./comment.js";
import user from "./user.js";
import sequelize from "../connect.js";

prod.belongsTo(cate, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
cate.hasMany(prod, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

prod.belongsToMany(user, { through: { model: comment, unique: false } });
user.belongsToMany(prod, { through: { model: comment, unique: false } });

comment.belongsTo(user);
user.hasMany(comment);

comment.belongsTo(prod);
prod.hasMany(comment);
export default { cate, prod, comment, user, sequelize };
