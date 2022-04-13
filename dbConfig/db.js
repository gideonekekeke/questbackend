const mongoose = require('mongoose')

// const url_offline = 'mongodb://localhost/appSubmissionDB'
const DB_ONLINE = process.env.URL
mongoose.connect(DB_ONLINE).then(()=>{
    console.log('connect to database successfully');
})