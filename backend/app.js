
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const env = require("dotenv");

const cookieParser = require('cookie-parser');
const globalErrorHandler = require('./utils/globalErrorHandler');
const authRoute = require('./Routes/authRoutes');
const path = require('path');


const app = express()
env.config({ path: "./config.env" })

app.use(express.static(path.join(__dirname, 'Public')))

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
// const redisClient = redis.createClient();

mongoose.connect(process.env.DATABASE_URL, {

})
    .then((con) => {
        console.log("database connected");
    }).catch(e => {
        console.log("not connected", e);
    })



app.use('/api/v1/auth', authRoute)
// app.use('/api/v1/review', reviewRouter)
// app.use('/api/v1/user', userrouter)


app.all("*", (req, res) => {
    res.status(404).send({
        status: "error",
        msg: "please hit valid url"
    })
})

app.use(globalErrorHandler)



app.listen(PORT, () => {
    console.log("server started at port ", PORT);
})

// syncViewCounts();













