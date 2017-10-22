import bodyParser from 'body-parser'

module.exports = app =>{
        
    /*----------  Config default port  ----------*/ 
    app.set('port',process.env.PORT || 3000);

    /*----------  Config the app to response json spaces format  ----------*/
    app.set('json spaces', 4);
    
    /*----------  Config the app to accept JSON  ----------*/  
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    /*----------  CORS  ----------*/
    app.use(function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })
    
};
