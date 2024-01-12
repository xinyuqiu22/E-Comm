const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("DB connection established successfully");
        })
        .catch(error => {
            console.error("DB connection failed: ", error.message);
        });
}

module.exports = dbConnect;
