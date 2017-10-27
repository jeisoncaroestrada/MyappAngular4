import auth from '../middlewares/auth';
import ArticlesCtrl from '../controllers/articles-controller'


module.exports = app =>{
    
    /*----------  GET all Articles   ----------*/
    app.get('/articles',auth.isAuth,ArticlesCtrl.getArticles);

    /*----------  POST a new Article  ----------*/
    app.post('/articles',auth.isAuth,ArticlesCtrl.createArticle);
    
    /*----------  UPDATE a Article  ----------*/
    app.put('/articles/:id',auth.isAuth,ArticlesCtrl.updateArticle);
    
    /*----------  DELETE a Article  ----------*/
    app.delete('/articles/:id',auth.isAuth,ArticlesCtrl.deleteArticle);
    
    /*----------  VOTEUP a Article  ----------*/
    app.put('/articles/voteUp/:id',auth.isAuth,ArticlesCtrl.voteUp);

    /*----------  VOTEDOWN a Article  ----------*/ 
    app.put('/articles/voteDown/:id',auth.isAuth,ArticlesCtrl.voteDown);
};