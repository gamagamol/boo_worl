const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017'
const dbName='boo'
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
const db = client.db(dbName)
module.exports=db