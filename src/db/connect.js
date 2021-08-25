import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSER, PGHOST, PGPASSWORD, PGPORT } = process.env;

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

const testConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ connection authenticated!!`);
  } catch (error) {
    console.error("⛔ db NOT conected:", error);
    console.log(error);
  }
};

export default sequelize;
