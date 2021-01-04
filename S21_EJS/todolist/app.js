// 265

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// 266
app.set('view engine', 'ejs'); // calling ejs

app.use(express.static(__dirname + '/public')); // calling public files
app.use(bodyParser.urlencoded({
    extended: true
})); // using bodyparser

// 268
let items = ['Buy food', 'Cook food', 'Eat food'];



// 265, 266
app.get("/", (req, res) => {
    console.log("**************265 Templates**************************");
    console.log("**************266 EJS**************************");
    console.log("**************267 Code inside EJS**************************");
    let today = new Date();
    let day = "";
    // chech if is saturday or sunday
    if (today.getDay() === 6 || today.getDay() === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }
    console.log("**************268 Passing data from webpage to server**************************");
    console.log(items);
    // 268
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    day = today.toLocaleDateString("en-US", options);

    // 265, 268
    res.render('list', {
        day: day,
        items: items
    });
});

// 268
app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    items.push(newItem);
    console.log(newItem);
    res.redirect("/")
})

/* 267 EJS TAGS
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

*/

app.listen(3000, () => console.log("Server started onr port 3000"));