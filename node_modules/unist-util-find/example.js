var remark = require('remark')
var find = require('./index.js')

remark()
  .use(function () {
    return function (tree) {
      // string condition
      console.log(find(tree, 'value'))

      // object condition
      console.log(find(tree, { value: 'emphasis' }))

      // function condition
      console.log(find(tree, function (node) {
        return node.type === 'inlineCode'
      }))
    }
  })
  .processSync('Some _emphasis_, **strongness**, and `code`.')
