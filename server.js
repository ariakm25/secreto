const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

const User = require('./models/User');
const Message = require('./models/Message');

////////////////////////////////////////      
//                User                //
////////////////////////////////////////
app.post('/register',(req,res) => {
    User.create(req.body).then( result => {
        console.log(result);

        res.json({
            message: 'success'
        },200);
    
    }).catch(err => console.log(err)); 
});


app.get('/users', (req,res) => {
    User.findAll().then(user =>{
        res.json({
            message : 'success',
            data : user
        },200);
    }).catch(err => console.log(err));
});

app.get('/users/:id',(req,res) => {
    let id = req.params.id;

    User.findOne({
        where: {
            id_user : id
        }
    }).then(user => {
        res.json({
            message: 'success',
            data : user
        },200);
        
    }).catch(err => console.log(err));
});

////////////////////////////////////////      
//              Messages              //
////////////////////////////////////////
app.post('/:username/submit',(req,res) => {
    let user = req.params.username;
    User.findOne({
        where : {
            username: user
        }
    }).then(result =>{
        Message.create({
            id_user : result.id_user,
            content_message : req.body.content_message
        }).then( result => {
            console.log(result);
            res.json({
                message: 'success',
                data: result
            },200);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err)); 
});

app.get('/messages/:username',(req,res) => {
    let user = req.params.username;
    User.findOne({
     where : {
         username : user
     }
    }).then(hasil => {
        Message.findAll({
            where: {
                id_user : hasil.id_user
            }
        }).then(result =>{
            res.json({
                message: 'success',
                data: result
            },200);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

app.listen(3000,() => {
    console.log('Running on 3000');
});