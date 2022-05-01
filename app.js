const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//public static path 
console.log(path.join(__dirname, "templates/views"));
console.log(path.join(__dirname, "templates/partials"));
const static_path = path.join(__dirname, "../weather/public");

// const template_path = path.join(__dirname, "../weather/templates/views");
const template_path = path.join(__dirname, "templates/views");
const partials_path = path.join(__dirname, "templates/partials");
app.set('view engine', 'hbs'); // adding index,about html in the form of hbs to set it dynamically
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing part
// app.get("/", (req, res) => {
//     res.send("weclome to home")
// })
// app.get("/about", (req, res) => {
//     res.send("weclome to about")
// })
// app.get("/weather", (req, res) => {
//     res.send("weclome to weather part")
// })
// app.get("*", (req, res) => {
//     res.send("weclome to error")
// })
// app.get("/contactus", (req, res) => {
//     res.send("weclome to contact us")
// })
app.get("/", (req, res) => {
    res.render('index')
})
app.get("/about", (req, res) => {
    res.render('about.hbs')
})
app.get("/weather", (req, res) => {
    res.render('weather')
})
app.get("*", (req, res) => {
    res.render('404error',{
        errorMsg:"Sorry! Page Not Found"
    })
})
app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})