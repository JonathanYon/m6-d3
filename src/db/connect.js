import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSER, PGHOST, PGPASSWORD, PGPORT } = process.env;

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const testConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ connection authenticated!!`);
  } catch (error) {
    console.error("⛔ db NOT conected:", error);
  }
};
testConnect();

export default sequelize;
