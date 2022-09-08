// Imports
const express = require("express")
const path = require("path")

// Routers
const userRoute = require("./routes/blog")

const app = express()
const dirPth = path.join(__dirname, "public")
const port = process.env.PORT || 999

const titles = {
  tag: "Portfolio",

  home: "Home",
  service: "Service",
  about: "About",
  contact: "Contact",

  not_found: "Page Not Found",
}

// Static Files
app.use(express.static(dirPth))
app.set("view engine", "ejs")

// Route Paths
app.get("/", (req, res) => {
  console.info(req.url)
  res.render("index", {
    page: titles.home,
    tag: titles.tag,
  })
})

app.get("/services", (req, res) => {
  console.info(req.url)
  res.render("services", {
    page: titles.service,
    tag: titles.tag,
  })
})

app.get("/about", (req, res) => {
  console.info(req.url)
  res.render("about", {
    page: titles.about,
    tag: titles.tag,
  })
})

app.get("/contact", (req, res) => {
  console.info(req.url)
  res.render("contact", {
    page: titles.contact,
    tag: titles.tag,
  })
})

app.use("/blog", userRoute)

// Not Found -- Everything Above this route
app.get("*", (req, res) => {
  console.info(req.url)
  res.render("not-found", {
    page: titles.not_found,
  })
})

// Listen
app.listen(port, console.info(`app listening on ${port}`))
