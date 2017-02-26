import { NgModule } from '@angular/core';
// Is this needed?
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from '../app.component';
import { PostsComponent } from '../posts/posts.component';
import { PostsEditComponent } from '../posts-edit/posts-edit.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const appRoutes: Routes = [
	{ path: 'posts', component: PostsComponent },
	{ path: 'posts-edit', component: PostsEditComponent },
	{ path: 'not-found', component: NotFoundComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
