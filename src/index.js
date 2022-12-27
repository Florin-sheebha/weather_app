const express = require('express')
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname, "../Public");
const viewsPath = path.join(__dirname, "../template/views");

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);


app.get('/about', function (req, res) {
    res.render('about.hbs');
  })

  app.get('/Help', function (req, res) {
    res.render('help.hbs');
  })

app.get('/', function (req, res) {
  res.render("home.hbs")
})

app.listen(3000, function(){
    console.log("The server is up on port 3000");
})