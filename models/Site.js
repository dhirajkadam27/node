const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    subdomain: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    canvasdata: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})

module.exports = mongoose.model("Site", siteSchema);