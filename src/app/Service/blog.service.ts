import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiURL = 'http://localhost:8088';

  constructor(private http: HttpClient) { 
  
  }
  
  getBlogs(): Observable<any> {
    return this.http.get(`${this.apiURL}/blogs/listc`);
  }
    
  addBlog(blog: Blog) {
    return this.http.post(`${this.apiURL}/blogs/addc`, blog);
  }

  uploadFile(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('img', file);
    return this.http.post(`${this.apiURL}/upload`, formData).toPromise();
  }

  deleteBlog(id:number){
    return this.http.delete(`${this.apiURL}/blogs/deleteC/${id}`);
  }


}