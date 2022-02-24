
const User = require('../models/User');


exports.home = async (req, res) => {

    let newUser = new User({name: req.params.name});
    await newUser.save().then((db_res)=>{
        res.send('User Added. Name: '+ req.params.name);
    });
}

exports.index = async (req, res) => {
    let users = await User.find();
    // console.log(users);
    res.render('user/index.ejs', {'users' : users});
    // res.send('waiting.');
}