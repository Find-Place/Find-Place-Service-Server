const express = require("express");
const app = express();
const port = 3000;
// testasdfasdf

const routeFile = require('./routes/route');

app.use(express.urlencoded({ extended: true }));
app.use(routeFile)


app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        error: "Invalid requset! Please check."
    })
})
app.use(function (error, req, res, next) {
    console.log(error);
    res.status(500).json({
        status: 500,
        error: "Something is wrong in server"
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
