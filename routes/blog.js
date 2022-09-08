const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  console.info(req.url)
  res.send("/blog/covid-reports")
})

router.get("/new-years-eve", (req, res) => {
  console.info(req.url)
  res.send("/blog/new-years-eve")
})

router.get("/happy-birthday-shampy", (req, res) => {
  console.info(req.url)
  res.send("/blog/happy-birthday-shampy")
})

router.post("/create-new", (req, res) => {
  res.send("Create a New User")
})

router
  .route("/usr/:id")
  .get((req, res) => {
    req.params.id
    console.info(req.usr)
    res.send(`Id of requested user is ${req.params.id}`)
  })
  .put((req, res) => {
    req.params.id
    res.send(`Update Id of requested user is ${req.params.id}`)
  })
  .delete((req, res) => {
    req.params.id
    res.send(`Delete Id of requested user is ${req.params.id}`)
  })

const users = [
  { name: "shampy", age: 17 },
  { name: "fiza", age: 17 },
]

router.param("id", (req, res, next, id) => {
  console.info(req.url)
  req.usr = users[id]
  next()
})

module.exports = router
