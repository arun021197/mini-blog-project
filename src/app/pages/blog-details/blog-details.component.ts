import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServService } from 'src/app/services/blog-serv.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  id:any;

blogs:any;




  constructor(private active:ActivatedRoute, private router:Router) {

    //Getting  id  using params 
    this.active.params.subscribe((param:any) =>{
      console.log(param);
      this.id=param.id;
    })
   }



  ngOnInit(): void {

    console.log('data',JSON.parse(localStorage.getItem('blogData')?? ''));

    //getting data from local storage using id to show  the particular blog details
    const localData = JSON.parse(localStorage.getItem('blogData')?? '');
    this.blogs=localData[this.id];
    console.log(this.blogs);
  }

  // By clicking update button navigating to Add blogs page
  updateBlog(updatedata:any){
    console.log(updatedata);
    this.router.navigate(['addblogs'],{queryParams:{indexValue:this.id}});
    
  }
}
