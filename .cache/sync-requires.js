const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/src/pages/404.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/src/pages/archive.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/src/pages/index.js"))),
  "component---src-pages-pensieve-index-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/src/pages/pensieve/index.js"))),
  "component---src-pages-pensieve-tags-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/src/pages/pensieve/tags.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/src/templates/post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("/Users/chandrikadeb/chandrikadeb7.github.io/src/templates/tag.js")))
}

