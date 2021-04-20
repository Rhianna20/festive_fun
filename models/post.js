const mongoose = require('mongoose');



const schema = mongoose.Schema({
    title: String,
    thingsToDo: String,
})

module.exports = mongoose.model('Post', schema)

  //"url" : "https://cloud.mongodb.com/freemonitoring/cluster/O5LECMKOH6JHSTFOCWDFCY3KPJM24S6N",