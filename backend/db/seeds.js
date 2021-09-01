const Gif = require('./models/gif')
const gifSeeds = require('./seeds.json')

Gif.deleteMany({})
    .then(() => {
        return Gif.insertMany(gifSeeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {process.exit()})