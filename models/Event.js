const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    description: { type: String }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;