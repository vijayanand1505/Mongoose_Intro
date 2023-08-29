const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({street: String,city: String,})
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type : Number,
        min : 1,
        max : 120,
        validate : {
            validator : v => v%2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default:() => Date.now()
    },
    updatedAt: {
        type: Date,
        default:() => Date.now()
    },
    bestFriend: {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "User"
    },
    hobbies: [String],
    address: addressSchema
});

userSchema.methods.sayHi = function(){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
};

userSchema.statics.findByName = function(name){
    return this.where({ name : new RegExp(name, 'i')});
}

userSchema.query.byName = function(name){
    return this.where({ name : new RegExp(name, 'i')});
}

userSchema.virtual('nameWithAge').get(function(){
    return `${this.name} (${this.email}) `;
});

userSchema.pre('save', function(next){
    this.updatedAt = Date.now();
    next();
});

userSchema.post('save', function(doc, next){
    doc.sayHi();
    next();
});

module.exports = mongoose.model('User', userSchema);