var mongoose = require('mongoose');
validators = require('mongoose-validators');

var  UsersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastname:{type: String, required: true},
    email: {type: String},
    username: {type: String, required: true},
    password: {type: String, required: true, min:[6, 'required min 6 characters']}
});

mongoose.model('User', UsersSchema);