const db = require("../models");
const axios = require("axios");



function bookController(app) {
    app.get("/api/googlebooks/:title", (req, res) => {
        //this allows you to access the variable you just named above (title)  from the URL
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title).then(function (results) {
            //any api it's always the object and then .data
            res.json(results.data)
        })
    })

    app.post("/api/books", (req, res) => {
        //req.body is put and post only
        db.Book.create(req.body).then (function (results) {
            res.json(results)
        })
    })

    app.get("/api/books", (req, res) => {
        db.Book.find().then(function (results) {
            res.json(results)
        })
    })
    app.delete("/api/books/:id", (req, res) => {
        db.Book.remove({_id:req.params.id}).then(function(results){
            res.json(results)
        })
    }
    )
}



module.exports = bookController;