import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = (process.env.PORT || 5000);
let posts = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render('index.ejs', {posts});
})

app.get("/new", (req, res) => {
    res.render('new.ejs');
})


app.post("/submit", (req, res) => {
    const {title, content}  = req.body;
    const newPost = {title, content};
    posts.push(newPost);
    res.redirect('/');
})

app.post("/delete", (req, res) => {
    posts.pop();
    res.redirect('/');
})

// app.post("/delete", (req, res) => {
//     posts = [];
//     res.redirect('/');
// })




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});