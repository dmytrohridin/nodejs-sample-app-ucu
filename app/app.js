const express = require("express");
const app = express();
const port = process.env.PORT || 80
app.get("/", (request, response) => {
    response.send("<h2>Hello UCU!</h2>");
});
app.listen(port);