//npm install dotenv
require('dotenv').config();

//npm install express
const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

//npm install mongodb
//npm install mongoose
const mongoose = require('mongoose')

//# MIDDLEWARE #
app.use(express.json());

//# ROUTES #
app.use('/api/workouts/', workoutRoutes);



//plan app and setup routes
/*
app.get('/', (req, res) => {
    res.json({fname: 'john', lname: 'pepito'});
})
*/

//connect to database | return a promise (also async)
//using Xeris as DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{ //once done
        console.log()
        app.listen(process.env.PORT_PRIMARY, () => {
            console.log(`connected to MongoDB and listening on port ${process.env.PORT_PRIMARY}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })










/*






const http = require('http')
const server = http.createServer((req, res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('this is the about page')
    }
    res.end('this page does not exist! D:')
    
})

server.listen(4001)



const { readFile, writeFile } = require('fs')
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log("error! D:");
        return;
    }
    console.log(result)
})


const fs = require('fs')

const first = fs.readFileSync('./content/first.txt','utf8')
const second = fs.readFileSync('./content/second.txt','utf8')

console.log(first)
console.log(second)

fs.writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${first} ${second}`,{flag:'a'}
)

const path = require('path')
console.log(`separator ${path.sep}`)


const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

const filePath = path.join('/content','subfolder','test.txt')
//returns normalized file path
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const names = require('../variables')
const utils = require('./utils')


const os = require('os')
//returns information about the current user
console.log(os.userInfo());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

//returns system uptime in seconds
//string template
console.log(`the system uptime is ${os.uptime()} seconds and the total memory is ${currentOS.totalMem} bytes`);


setInterval(() => {
    utils.sayHi(names.name1);
}, 1000)


setTimeout(() => {
    console.log('setTimeout!')
}, 1000);
setInterval(()=>{
    console.log('hello world!')
}, 1000)
*/

