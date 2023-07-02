import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from 'src/app/news.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '5d9ddb5bb6aa4517bca812c7f97a3a1e';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  searchIrishNews() {
    const params = {
      country: 'ie',
      apiKey: this.apiKey
    };
    return this.http.get<{ articles: News[] }>(this.apiUrl, { params }).pipe(
        map(response => response.articles)
      );
  }

  searchNews(term : string){
    return this.http.get<{ articles: News[] }>(
      'https://newsapi.org/v2/everything?q='+ term +'&apiKey=' + this.apiKey
    ).pipe(map((response: { articles: News[] }) => response.articles));
  }

}