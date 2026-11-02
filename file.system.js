import fs from "fs";

app.get("/log-fs", (req, res) => {

    fs.writeFileSync(" file.txt,"hello filesytem");

    const data = fs.readFileSync("file", "utf-8");

    fs.appendFileSync("file.txt,\Server is running");

    res.status(200).json({
        message: "File operations successful",
        data: data
    });

});