const mongoose = require('../connection')

const GifSchema = new mongoose.Schema({
    name: String,
    url: String
},
{timestamps: true}
)

const Gif = mongoose.model('Gif', GifSchema)

module.exports = Gif
