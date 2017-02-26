import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from '../app.component';
import { PostsComponent } from '../posts/posts.component';
import { PostsEditComponent } from '../posts-edit/posts-edit.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PublicComponent } from '../public/public.component';
import { PrivateComponent } from '../private/private.component';

const appRoutes: Routes = [
	{ path: 'posts', component: PostsComponent },
	{ path: 'posts-edit', component: PostsEditComponent },
	{ path: 'not-found', component: NotFoundComponent },
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent }
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
