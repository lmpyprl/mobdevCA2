import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news.service';
import { Router } from '@angular/router';
import { News } from '../../news.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  news$: Observable<News[]> | undefined;
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.searchIrishNews();
  }

  searchIrishNews() {
    this.news$ = this.newsService.searchIrishNews();
  }

  showNewsArticle(article: News) {
    this.router.navigateByUrl('/tabs/Ireland/preview', { state: { article } });
  }

}
