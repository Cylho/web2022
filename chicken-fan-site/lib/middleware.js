const flashMiddleware = (req, res, next) => {
  // if there's a flash message, transfer
  // it to the context, then clear it
  res.locals.flash = req.session.flash
  delete req.session.flash
  next()
}

const getNewsData = () => [
{
heading: 'A new recipe',
body: "We just add a new recipe on the site for more incredible recipes.",
Auther: 'Cyriaque Devisme'
},
{
  heading: 'We won the war',
  body: "Our concurrent, the cow fan site has been deleted, we won the war.",
  Auther: 'Cyriaque Devisme',
}  
]

const newsMiddleware = (req, res, next) => {
if(!res.locals.partials) res.locals.partials = {}
res.locals.partials.newsContext = getNewsData()
next()
}

module.exports = { newsMiddleware: newsMiddleware, flashMiddleware: flashMiddleware }