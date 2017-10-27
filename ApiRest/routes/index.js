import AuthCtrl from '../controllers/auth-controller';

module.exports = app =>{
    app.get('/',(req, res)=>{
        res.json({
            response:'API WORKS!'
        })
    });

    app.post('/signUp',AuthCtrl.signUp);
    app.post('/login',AuthCtrl.login);
};

