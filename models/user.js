const mongodb = require('mongodb')
const db = require('../util/database').getDb;

class User {
    constructor (username,email){
        this.username = username;
        this.email = email;
    }
    save(){
        const db = getDb();
        return db.collection('users').insertOne(this)
    }
    static findByPk(userId){
        const db = getDb();
        return db.collection('users').findOne({_id:new ObjectId(userId)}).next()
    }
}