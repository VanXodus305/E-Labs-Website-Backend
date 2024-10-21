const mongoose = require('mongoose');

const connect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DBNAME}`
    );
    console.log(
      "Database Connected Successfully ! ",
      connectionInstance.connection.host,
      connectionInstance.connection.name
    );
  } catch (error) {
    console.log(error, "while trying to connect to database !");
    process.exit(1);
  }
}

module.exports = connect;
