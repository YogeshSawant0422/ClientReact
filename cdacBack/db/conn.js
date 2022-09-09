const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
        console.log(`Databse Connect Successful.`);
}).catch((err) => console.log(err));