import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  
  ngOnInit() {} 

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
