import { ArticlesService } from '../../../services/articles/articles.service';

export class Article {
    title: string;
    link: string;
    votes: number;
    _id:string;
    
    constructor(
        title:string,
        link:string,
        votes?:number,
        _id?:string,
    ){
        this.title = title;
        this.link = link;
        this.votes = votes? votes : 0;
        this._id = _id? _id : '';
    }
    
    voteUp():void{
        this.votes++;   
    }

    voteDown():void{
        this.votes--;
    }

    domain(): string{
        try{
            const link = this.link.split('//')[1];
            return link.split('/')[0];

        } catch(err){

        }
    }
    
}