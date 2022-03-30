const mongoose = require("mongoose");

const cnntSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        PlayerID: { type: Number, required: true }        
    }
);

module.exports = mongoose.model('cnt', cnntSchema);