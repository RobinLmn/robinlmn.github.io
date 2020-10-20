module.exports = {
  pages: {
    'index': {
      entry: './src/pages/home/main.js',
      filename: 'index.html',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'videogames': {
      entry: './src/pages/videogames/main.js',
      filename: 'videogames.html',
      template: 'public/index.html',
      title: 'VideoGames',
      chunks: [ 'chunk-vendors', 'chunk-common', 'videogames' ]
    }
  }
}
