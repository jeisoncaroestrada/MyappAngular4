import mongojs from 'mongojs'


/*----------  Config MongoDb Conection  ----------*/
const db = mongojs('DbVotes',[
    'articles'
]);

module.exports = app =>{

    
    /*----------  GET all Articles   ----------*/
    app.get('/articles', (req,res) =>{
        db.articles.find( (err, articles) => {
            res.json({
                articles
            });
        });
    });

    /*----------  POST a new Article  ----------*/
    app.post('/articles',(req,res)=>{
        let newArticle = req.body;
        db.articles.insert(newArticle, (err, article) =>{
            res.json({
                article
            });
        });
    });
    
    /*----------  UPDATE a Article  ----------*/
    app.put('/articles/:id', (req, res) =>{
        let updatedArticle = {
            title:  req.body.title,
            link:   req.body.link,
            votes:  req.body.votes,
        }
        db.articles.update(
            {_id: mongojs.ObjectId(req.params.id)},
            updatedArticle,
            {},
            (err, response) =>{
                res.json({
                    response
                });
            }
        )
    });
    
    /*----------  DELETE a Article  ----------*/
    app.delete('/articles/:id', (req, res) =>{
        let deleteArticle = req.body;
        db.articles.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err, response) =>{
            res.json({
                response
            })
        });
    });
    
    /*----------  VOTEUP a Article  ----------*/
    app.put('/articles/voteUp/:id',(req, res) =>{
        db.articles.update(
            {_id: mongojs.ObjectId(req.params.id)},
            {$inc: {votes: 1}},
            {},
            (err, response) =>{
                res.json({
                    response
                });
            }
        )
    })

    /*----------  VOTEDOWN a Article  ----------*/ 
    app.put('/articles/voteDown/:id',(req, res) =>{
        db.articles.update(
            {_id: mongojs.ObjectId(req.params.id)},
            {$inc: {votes: -1}},
            {},
            (err, response) =>{
                res.json({
                    response
                })
            }
        )        
    })
};