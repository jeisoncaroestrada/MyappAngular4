import bodyParser from 'body-parser'

module.exports = app =>{
        
    /*----------  Config default port  ----------*/ 
    app.set('port',process.env.PORT || 3000);

    /*----------  Config the app to response json spaces format  ----------*/
    app.set('json spaces', 4);
    
    /*----------  Config the app to accept JSON  ----------*/  
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
};
