const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
  name :{
      type  : String,
      required : true,
        index: {
            unique: true,
        },
  } ,
  email :{
    type  : String,
    required : true,
    index:{
        unique:true,
    },
      match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
} 
,
password :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
}
});
const User= mongoose.model('User',UserSchema);

module.exports = User;