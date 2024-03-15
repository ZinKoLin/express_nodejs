const express = require("express");
let morgan = require('morgan');

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");




//pakage name -morgan
app.use(morgan('dev'))



app.get("/", function (req, res) {

    let blogs = [
        {title:'Blog title 1', intro:'this is blog intro 1'},
        {title:'Blog title 1', intro:'this is blog intro 1'},
        {title:'Blog title 1', intro:'this is blog intro 1'},
    ];

    res.render('home',{
        blogs:blogs,
        title:'home'
    })
 
});

app.get("/about", function (req, res) {
  res.render("about",{
    title:'about'
  }
    
  );
});



app.get("/contact", function (req, res) {
  res.render("contact",{
    title:'contact'
  });
});

app.use((req, res) => {
  //404 page
  res.status(404).render("404",{
    title:'Error'
  });
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
