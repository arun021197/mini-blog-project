import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServService {
  

  
  constructor(private http: HttpClient) {
    
  }
  blogsetitem: any;
  bloggetitem: any;
  formvalue: any;
  id: any;
   

  // Fetching data from API

  fetchblog(): Observable<any> {
    return this.http.get<any>("https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2");
  } 

//Getting data from local storage to view data in home component

  getBlogDatatohome(){
    const localBlog = localStorage.getItem('blogData');
    if (localBlog === null || localBlog === undefined) {
      //Getting value from API using subscribe
      this.fetchblog().subscribe(resp => {
        if (resp) {
          localStorage.setItem('blogData', JSON.stringify(resp.articles));
        }
      })
    }
    
  }


  getblogs() {
    this.bloggetitem = JSON.parse(localStorage.getItem("blogs") || "[]");
  }

 

 

 

}
