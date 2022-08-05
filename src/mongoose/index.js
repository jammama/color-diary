import mongoose from 'mongoose'

mongoose.connect('mongodb://131.186.21.47:27017/diary')
var db = mongoose.connection;

db.on('error', function(){
    console.log('failed!');
});

db.once('open', function() {
console.log('Connected!');
var diary = mongoose.Schema({
    contents: 'string',
    date: 'string',
    id: 'string',
    title: 'string'
})
var Diary = mongoose.model('Schema',diary)
returnTest = Diary.findOne({id:'siznorias@gmail.com'})
});