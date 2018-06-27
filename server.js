var express=require("express");
var app = express();
app.use(express.static(__dirname))

app.listen(process.env.PORT || 8080, () => {
    console.log(`server listen on port ${process.env.PORT || 8080}`);
    if (process.send) {
        process.send({
            event: "online"
        })
    }
});
