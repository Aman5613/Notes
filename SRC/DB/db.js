const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect("mongodb+srv://user-aman:G2yptoEbtKcwNEfX@notes.edr7oup.mongodb.net/")
    .then(
        console.log("connected to DB")
    )
}

module.exports = connectToDB;