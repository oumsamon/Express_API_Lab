const mongoose = require('../connection')

const GifSchema = new mongoose.Schema({
    name: String,
    url: {type: String, required: true}
},
{timestamps: true}
)

const Gif = mongoose.model('Gif', GifSchema)

module.exports = Gif
