import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  newsData: any[]=[]
  constructor(public newsService:NewsService) { }
  ngOnInit(): void {
    this.getNews()
  }
  getNews(){
    this.newsService.getNews().subscribe((res:any)=>{
      console.log('res',res.articles)
      this.newsData = res.articles
    })
  }
}
