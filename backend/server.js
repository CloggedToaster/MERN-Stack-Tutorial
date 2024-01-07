//npm install dotenv
//must call this from the same directory with .env file
require('dotenv').config()

//npm install express
const express = require('express')
//npm install mongodb
//npm install mongoose
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//# MIDDLEWARE #
app.use(express.json())

//# ROUTES #
app.use('/api/workouts/', workoutRoutes)

//connect to database | return a promise (also async)
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{ //once done
        app.listen(process.env.PORT_PRIMARY, () => {
            console.log(`connected to MongoDB and listening on port ${process.env.PORT_PRIMARY}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

