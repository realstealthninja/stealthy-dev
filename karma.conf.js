module.exports = function(config) {
  config.set({
    browsers: ['Chrome','FirefoxHeadless'],
    customLaunchers: {
      'FirefoxHeadless': {
        base: 'Firefox',
        flags: [
          '-headless',
        ],
      }
    },
  }
  )
}
