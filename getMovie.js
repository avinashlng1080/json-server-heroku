const { generateMovies } = require('./movies')

module.exports = function(){
    const movie = generateMovies(10,4)
    return {
        movie: movie
    }
}