const express = require('express')
const mongoose = require('mongoose')//封装的原生的方法，用来操作mongodb

// connect mongodb and use automation database
const DB_URL = 'mongodb://127.0.0.1:27017/automation'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongo connect success!')
})
//类似mysql表的概念 mongo里有文档 字段等
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))
// 新增数据
User.create({
    user: 'walle',
    age: 28
},function(err, doc){
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})
User.remove({age: 20}, function(err, doc){
    console.log(doc)
})
const app = express()

app.get('/', function(req, res){
    res.send('<h1>Hello World</h1>')

})

app.get('/data', function(req, res){
    User.find({}, function(err, doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('Node app start on port 9093')
})