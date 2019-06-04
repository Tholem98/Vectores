const express = require('express')
const app = express()
const path = require('path')

app.set('port',process.env.PORT||3000)
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.listen(app.get('port'),()=>console.log('Server on port',app.get('port')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})

app.post('/',(req,res)=>{
    console.log('work')
    let vector1 = {}
    let vector2 = {}
    vector1.x = req.body.vector1x;
    vector1.y = req.body.vector1y;
    vector1.z = req.body.vector1z;
    vector2.x = req.body.vector2x;
    vector2.y = req.body.vector2y;
    vector2.z = req.body.vector2z;
    res.sendFile(path.join(__dirname,'public/index.html'))
})