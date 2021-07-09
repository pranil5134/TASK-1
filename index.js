const { text } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs")


app.get('/gettime', (req, res) => {
    let timestamp = new Date().getTime();
    let Time_stamp = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() + "_" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds()
    fs.writeFile(`./Time_stamp${timestamp}.txt`, "welcome to time " + `${Time_stamp}`, function (err) {

        if (err) throw err;
        console.log("file is created" + "_" + Time_stamp)
    })
    res.send("Hello world")
})

app.get('/getfile', (rq, res) => {
    fs.readdir("E:/Pranil S/GUVI/Nodejs/Nodejs-Task/Task-1", function (err, files) {

        if (err) throw err;
        let i = 1;
        for (let file of files) {
            if (file.includes(".txt")) {
                res.write(i + " " + file);
                res.write("\n");
                i++;
            }

        }
        res.end();
    })
})

app.listen(port, () => {
    console.log(`port is ${port}`);
})