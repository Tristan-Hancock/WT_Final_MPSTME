const mongoose = require("mongoose");

const customRegSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        dt: { type: String, required: true },
        tn: { type: String, required: true },
        igl: { type: String, required: true },
        phonenumber: {type:String}
        
    }
);

module.exports = mongoose.model('Cr', customRegSchema);