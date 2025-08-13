const mongoose = require("mongoose")


// database ka schema -> bole to usme kya kya hoga aur uska datatype kya hoga
const noteSchema = new mongoose.Schema({
    title : String,
    description : String
})

// database ka model -> help in performing CRUD operations
const noteModel = mongoose.model("Notes", noteSchema);
// console.log(noteModel);

module.exports = noteModel