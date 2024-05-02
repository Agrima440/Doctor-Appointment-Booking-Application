const mongoose=require('mongoose');
// const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
  name:{
type:String,
required:[true,'name is require']
  },
  email:{
type:String,
required:[true,'email is require']
  },
 
  password:{
    type:String,
    required:[true, 'password is require']
  },
isAdmin:{
  type:Boolean,
  default:false
},
isDoctor:{
  type:Boolean,
  default:false
},
notification:{
  type:Array,
  default:[] 
},
seennotification:{
  type:Array,
  default:[]
}

},{
  timestamps:true
}
)
// bcrypt the password
// userSchema.pre("save",async function(next){
//   if (!this.isModified("password")) {
//       next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// })

// // compare the password
// userSchema.methods.matchPassword=async function(enterPassword){
//   return await bcrypt.compare(enterPassword,this.password)
// }

const userModel= mongoose.model('users',userSchema);

module.exports= userModel;
