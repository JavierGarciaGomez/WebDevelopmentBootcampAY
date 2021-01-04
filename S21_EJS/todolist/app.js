// 265

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// 266
app.set('view engine', 'ejs'); // calling ejs

app.use(express.static(__dirname + '/public')); // calling public files

// 265, 266
app.get("/", (req, res) => {
    console.log("**************265 Templates**************************");
    console.log("**************266 EJS**************************");
    let today = new Date();
    let day = "";
    // chech if is saturday or sunday
    if (today.getDay() === 6 || today.getDay() === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }
    res.render('list', {
        day: day
    });
});

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