import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsAPI= "https://newsapi.org/v2/top-headlines?country=in&apiKey=e07e5a72d3cb46b78da5abc396939db4"
  constructor(private https: HttpClient) { 
    
  }
  getNews(){
  return this.https.get(this.newsAPI)   
  }
}
