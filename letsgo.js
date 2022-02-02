const express = require("express"); //allows us to use express, so we can access routes 
const app = express();

//Server is listening on port 8080
app.listen(8080, () => {
    console.log("server on!");
});

//this is going to be a web server. I'm using get to retrieve data
//line 12 app.get when we hit enter we are sending a request
//line 14 is the response that we get
app.get("/claudias-favorite-movie", (req, res)=> {
    res.send(`
        <h1> Mrs. Doubtfire</h1>
    `);
})
//^^ hey we just created a server! in just 16 lines of code!
