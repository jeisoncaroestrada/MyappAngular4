import { Component } from '@angular/core';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string;
  hobbies: string[];
  posts: IPost[];

  constructor(private postService:PostService){
    this.name = 'Json!';
    this.hobbies = ['Gym','Music','Travel'];
    this.postService.getPosts().subscribe(posts=> {
      this.posts = posts;
    });
  }

  createHobby(hobby:any){
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}

interface IPost{
  id: string;
  title: string;
  body: string;
}
