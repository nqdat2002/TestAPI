const mongoose = require("mongoose");
mongoose.Promise = Promise;
const connect = mongoose.connect(process.env.MONGOOSE_URL).then(
    (res) =>{
        console.log("Database connected");
    }
).catch((err) =>{
    console.log(`Database connection error: ${err}`);
});

module.exports = connect;