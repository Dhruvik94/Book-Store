const express = require("express")
const Author = require("../models/author")

const router = express.Router()

router.get("/", (req, res) => {
    res.render('authors/index')
})

router.get("/new", (req, res) => {
    res.render('authors/new', { author: new Author() })
})

router.post("/", (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    author.save((err, newAuthor) => {
        if (err) {
            res.render("authors/new", {
                author: author,
                errorMessage: "Error Creating Author"
            })
        } else {
            // res.redirect(`authors/${newAuthor.id}`)
            res.redirect(`authors`)
        }
    })
    // res.send(req.body.name)
})

module.exports = router