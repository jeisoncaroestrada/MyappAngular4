import mongojs from 'mongojs';
import jwtService from '../services/jwt-service';
import bcrypt from 'bcrypt-nodejs';

/*----------  Config MongoDb Conection  ----------*/
const db = mongojs('DbVotes',[
    'users'
]);

/*----------  Logic to register users  ----------*/  
exports.signUp = function(req, res){
    encryptPassword(req.body.password)
    .then((hash) =>{ 

        let newUser ={
            email: req.body.email,
            name: req.body.name,
            password: hash
        };

        db.users.insert(newUser, (err, user) =>{
            res.json({
                user
            });
        });
    })
    
};

/*----------  Logic to start session  ----------*/
exports.login = function (req,res) {
    db.users.findOne(
        {email: req.body.email},
        { _id: true, name: true, password: true, email: true},
        (err,user) =>{
        if(err) return res.status(500).send({message: err});
        if(!user) return res.status(404).send({message: `There is no user with email: ${req.body.email}`});
            console.log(user);
        if (req.body.email == user.email && bcrypt.compareSync(req.body.password, user.password)){
            
            req.user = user;
            res.json({
                token: jwtService.createToken(user),
                userName: user.name
            })
        }else{
    
            res.json({
                error: 'Bad Credentials'
            })
        }
    })
};

let encryptPassword = function(password){
   return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) =>{
           if(err) reject(err);
           
           bcrypt.hash(password, salt, null, (err, hash) =>{ 
               if(err) reject(err);;
                resolve(hash);
            });
        });
    });
};