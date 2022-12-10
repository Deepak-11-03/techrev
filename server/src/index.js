const express = require('express');
const route = require('./routes/router');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin , X-Requested-With, Content-Type ,Accept,Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods' ,'GET ,POST ,PATCH ,DELETE')
    next()
})

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://testing:TXPxQZxsp8BSnQb9@cluster0.jhebhrt.mongodb.net/techrev")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});