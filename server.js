const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require("dotenv").config();

const env = process.env;

const port = env.PORT || 3000;

const userRouter = require('./routes/UserRoute');
// const allRoutes = require('./route');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user', userRouter);
// app.use('/birds', userRoutes)
// app.use('/birds', allRoutes);


async function main() {
    await mongoose.connect(env.DB_URI);
}

main().catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})
