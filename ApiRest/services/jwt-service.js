import moment from 'moment';
import jwt from 'jsonwebtoken';
import config from '../libs/config';


exports.createToken = function(user){
    let data = {
        sub: user._id,
    }

    let token = jwt.sign(data, config.jwt_secret,{
        expiresIn: '4h'
    });

    return token;
}

/*----------  Logic to JWT validate token ----------*/
exports.validateToken = function(token){
    let  decoded = new Promise((resolve, reject) =>{

        try {
            let payload = jwt.decode(token,config.jwt_secret);
            
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'Token expired'
                })
            }

            jwt.verify(token,config.jwt_secret, function(err, decoded){
                
                if(err){
                    reject({
                        status: 401,
                        message: 'Invalid token'
                    })
                }
    
            })
            
            resolve(payload.user)
           
        } catch (error) {
           reject({
               status: 500,
               message: 'Invalid Token'
           }) 
        }
    })

    return decoded;
}