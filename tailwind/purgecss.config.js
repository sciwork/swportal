module.exports = {
  content: ['./**/*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}
