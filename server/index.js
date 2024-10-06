const express =require('express');
const app = express();
const cors=require('cors');

require('dotenv').config({path:"./config.env"});
const port = process.env.PORT || 5000;

// use Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const con=require('./db/connection.js');

// Routes
app.use(require('./routes/route.js'))

con.then(db=>{
    if(!db)return process.exit(1);

    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    })

    app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
}).catch(error=>{
    console.log(`Server error: ${error}`);
});