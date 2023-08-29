const mongoose = require('mongoose');
const User = require('./User');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

    //const user = await User.findById("64ed6d8eda2b10c0a24b10e2");
    //const user = await User.findOne({name: "John"});
    //const user = await User.where('name').equals('John');
    //const user = await User.where('name').equals('John').where('age').gt(10);
    //const user = await User.where('name').equals('John').where('age').gt(10).limit(1).select("age")


    // const user = await User.where('name').equals('John').where('age').gt(10).limit(2).select("age") 
    // user[0].bestFriend = '64ed6d8eda2b10c0a24b10e2'
    // await user[0].save()

    // const user = await User.where('name').equals('John').where('age').gt(10).limit(1).populate("bestFriend");

    //const user = await User.deleteOne({name: "John"});

    // const user = await User.findOne({name: "John"});
    // user.sayHi();

    // const user = await User.findOne({name: "John", email: 'tvijayanandkkp@gmail.com'});
    // console.log(user.nameWithAge);

    const user = await User.findOne({name: "John", email: 'tvijayanandkkp@gmail.com'});
    console.log(user);
    user.save();


    console.log(user);
}

