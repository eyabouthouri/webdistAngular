import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blog: Blog = new Blog();
  selectedFile: File | null = null;
  selectedFileName : string;

  constructor(private blogService: BlogService,private route: Router) { }

  ngOnInit(): void {
  }
  
  saveBlog(){
    this.blogService.addBlog(this.blog).subscribe(
      () => {
        this.route.navigate(['/frontoffice/blogs/listblogs']);
      },
      (error) => {
        console.log('Error:', error);
      },
     
    );

  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!this.selectedFile) return;
    const formData = new FormData();
    formData.append('img', this.selectedFile, this.selectedFileName);
    this.blogService.uploadFile(this.selectedFile).then((response: any) => {
      console.log('File uploaded successfully:', response);
      this.blog.img = response.fileName;
      // Create a blog using the uploaded file information

      this.blogService.addBlog(this.blog).subscribe((blogResponse: any) => {
        console.log('Blog added successfully:', blogResponse);
        this.route.navigate['/frontoffice/blogs/listblogs'];
      });
    });
  }







}
