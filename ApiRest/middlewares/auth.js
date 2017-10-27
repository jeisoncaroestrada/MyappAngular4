/*----------  DEPENDENCIES  ----------*/
import jwtService from '../services/jwt-service';


exports.isAuth = function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['Authorization'];
    console.log(token)
    if(!token){
        return res.status(403).send({
            'error': 'Token not found'
        });
    }

    jwtService.validateToken(token)
    .then(response =>{
        req.user = response
        next()
    })
    .catch(response =>{
        res.status(response.status).send({'error': response.message})
    })
}