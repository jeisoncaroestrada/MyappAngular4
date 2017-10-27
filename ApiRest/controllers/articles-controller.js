import mongojs from 'mongojs'

/*----------  Config MongoDb Conection  ----------*/
const db = mongojs('DbVotes',[
    'articles'
]);

 
/*----------  GET all Articles   ----------*/
exports.getArticles = function(req,res){
    db.articles.find( (err, articles) => {
        res.json({
            articles
        });
    });
};

/*----------  POST a new Article  ----------*/
exports.createArticle = function(req,res){
    let newArticle = req.body;
    db.articles.insert(newArticle, (err, article) =>{
        res.json({
            article
        });
    });
};

/*----------  UPDATE a Article  ----------*/
exports.updateArticle = function(req, res){
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
};

/*----------  DELETE a Article  ----------*/
exports.deleteArticle = function(req, res){
    let deleteArticle = req.body;
    db.articles.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, (err, response) =>{
        res.json({
            response
        })
    });
};

/*----------  VOTEUP a Article  ----------*/
exports.voteUp = function(req, res){
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
};

/*----------  VOTEDOWN a Article  ----------*/ 
exports.voteDown = function(req, res){
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
};