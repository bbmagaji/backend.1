import express from "express";
import os from "os";
import fs from "fs";

const app = express();

app.get("/health-os", (req, res) => {
res.status(200).json({
platform: os.platform(),
totalMemory: os.totalmem(),
freeMemory: os.freemem(),
hostname: os.hostname()
});
});

app.get("/log-fs", (req, res) => {
fs.appendFileSync("server.log", "Server is running\n");

```
res.status(200).send("Log saved successfully");
```

});

app.listen(5000, () => {
console.log("Server running on port 5000");
});