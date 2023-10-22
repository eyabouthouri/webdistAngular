import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogsComponent,
    ListBlogsComponent,
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,FormsModule, SharedModule
  ]
})
export class BlogsModule { }
