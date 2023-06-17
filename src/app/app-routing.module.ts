import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { FeaturedPostComponent } from './pages/featured-post/featured-post.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { RecentPostComponent } from './pages/recent-post/recent-post.component';

const routes: Routes = [
  { path:'', component: PagesComponent},
  { path:'home', component: HomeComponent},
  { path:'topics', component: TopicsComponent},
  { path:'featured', component: FeaturedPostComponent},
  { path:'recent', component: RecentPostComponent},
  { path:'projects', component: ProjectsComponent},
  { path:'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
