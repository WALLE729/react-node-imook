const mongoose = require('mongoose')//封装的原生的方法，用来操作mongodb

// connect mongodb and use imooc database
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
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
    user: 'xiaohong',
    age: 38
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