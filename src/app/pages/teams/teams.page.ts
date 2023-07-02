import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { News } from '../../news.interface';
import { NewsService } from 'src/app/services/news.service';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage  {
  news$: Observable<News[]> | undefined;
  APIKEY: string = '5d9ddb5bb6aa4517bca812c7f97a3a1e';
  searchTerm: string = ''; 

  constructor(private router: Router, private http: HttpClient, private newsService: NewsService) {}

  
  showNewsArticle(article: News) {
    this.router.navigateByUrl('/tabs/Search/preview', { state: { article } });
  }
  searchNews(term : string){
    this.news$ = this.newsService.searchNews(term);
  }

  

  

}