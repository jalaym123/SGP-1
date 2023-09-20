const mongoose = require('mongoose');

const connectDb = async (mongoURL) => {
    try {
        const connection = await mongoose.connect(mongoURL)
        console.log(
            "Database Connected",
            connection.connection.host,
            connection.connection.name
        )
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDb;