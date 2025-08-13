const mongoose = require("mongoose")


// DataBase connect karne ka code 
function connectToDB(){
    mongoose.connect("mongodb+srv://user-aman:G2yptoEbtKcwNEfX@notes.edr7oup.mongodb.net/NOTES")
    .then(
        console.log("connected to DB")
    )
}


// fir us function ko export kar lenge
module.exports = connectToDB;