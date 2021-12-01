import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogsComponent } from './pages/add-blogs/add-blogs.component';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
     path: 'home', 
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
 },

{
   path: 'blogDetails', 
   loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule)
   },
{
  path: '', 
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},

{
  path:'blogdetails',
  component:BlogDetailsComponent
},
  { path: 'allBlogs',
   loadChildren: () => import('./pages/all-blogs/all-blogs.module').then(m => m.AllBlogsModule) 
  },
  {
path:'allBlogs',
component:AllBlogsComponent
  },
  { path: 'addBlogs', 
  loadChildren: () => import('./pages/add-blogs/add-blogs.module').then(m => m.AddBlogsModule) 
},
  {
    path:'addblogs',
    component:AddBlogsComponent
    },
  { path: '**', loadChildren: () => import('./pages/errorpage/errorpage.module').then(m => m.ErrorpageModule) }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
