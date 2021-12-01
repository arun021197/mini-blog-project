import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServService } from '../../services/blog-serv.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogData: any = [];
  blogdetails:any;
  
  // static image path for blogs that dont have image
  noImgPath:string ="../../assets/noimage.jpg";
  


constructor(private blogdataservice:BlogServService,private router:Router) { }

  ngOnInit(): void {

    //From service passing the data and splicing to display only 5 blogs in home
    this.blogdataservice.getBlogDatatohome();
    console.log('data',JSON.parse(localStorage.getItem('blogData')?? ''));
    const localData = JSON.parse(localStorage.getItem('blogData')?? '');
    this.blogdetails = localData.splice(0, 5);

    this.blogData.sort((x:any,y:any)=>{
    const a=new Date(x.publishedAt);
    console.log(a);
    const b=new Date();
    return a===b?0:a>b?1:-1;
}) 
  }
  
  // when clicking view more button Navigating to all blogs component
  navtoallblog(){
    this.router.navigateByUrl('allblogs');
  }
}

