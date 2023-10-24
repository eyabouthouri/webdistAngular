import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Service/blog.service';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {
  serverImageUrl: string = 'http://localhost:8088/uploads/';
  blogs: Blog[]; 
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data; // Assuming the data from the API is an array of blogs
    });
  }
  deleteBlog(b: Blog) {
    let i = this.blogs.indexOf(b);
    
    this.blogService.deleteBlog(b._id).subscribe(
      () => {
        this.blogs.splice(i, 1); // Remove the blog only if the request is successful
      },
      (error) => {
        console.error('Error deleting blog:', error);
        // Handle the error as needed
      })
  
  }


}
