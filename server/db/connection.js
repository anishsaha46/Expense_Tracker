const mongoose = require('mongoose');

const conn =mongoose.connect(process.env.ATLAS_URI)
.then(db=>{
    console.log('Connected to MongoDB');
    return db;
}) .catch(err=>{
    console.error('Error connecting to MongoDB', err);
});

module.exports =conn;