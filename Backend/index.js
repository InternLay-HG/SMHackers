const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", rootRouter);
app.listen(3000,()=>{
    console.log("App is running on port 3000");
})