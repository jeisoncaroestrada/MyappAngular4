export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(
        title:string,
        link:string,
        votes?:number
    ){
        this.link = title;
        this.title = link;
        this.votes = votes? votes : 0;
    }


    voteUp():void{
        this.votes++;

    }

    voteDown():void{
        this.votes--;
    }

    
}